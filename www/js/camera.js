$(document).ready(function(){

	$('#scanner').click(function(){
		
		console.log('clicked');
	
		cordova.plugins.barcodeScanner.scan(
		function (result) {
		  //alert("We got a barcode\n" +
				//"Result: " + result.text + "\n" +
				//"Format: " + result.format + "\n" +
				//"Cancelled: " + result.cancelled);
			//document.getElementById("frame").src = result.text;

		 	var obj = JSON.parse('[' + result.text + ']'); 
			console.log(obj[0]);
			//alert("url:" + obj[0].url);
			//alert("bannerDat:" + obj[0].bannerDat);
			var fileTransfer = new FileTransfer();
			var uri = encodeURI(obj[0].url+obj[0].bannerDat);
			var fileURL = cordova.file.dataDirectory + 'banner.dat';
			fileTransfer.download(
    			uri,
    			fileURL,
    			function(entry) {
        			//alert("download complete: " + entry.toURL());
        			//This alias is a read-only pointer to the app itself
					window.resolveLocalFileSystemURL(fileURL, gotFile, fail);
   				 },
    			function(error) {
        			alert("download error source " + error.source);
        			alert("download error target " + error.target);
        			//alert("upload error code" + error.code);
    			},
    			true
			);
			function fail(e) {
				alert("FileSystem Error");
				alert(e);
			}
			

			function gotFile(fileEntry) {

				fileEntry.file(function(file) {
					var reader = new FileReader();

					reader.onloadend = function(e) {
						//alert("Text is: "+this.result);
						//alert(window.localStorage.getItem('memberyBanner'));
						document.querySelector(".scrollable-content").innerHTML = this.result;
						//var db = window.openDatabase("Database", "1.0", "Membery", 200000);
						var resultJson = JSON.parse('{ \"url\" : \"' + obj[0].url + '\", \"bannerDat\": \"' + escape(this.result) + '\" }');
						console.log(resultJson);
						// To retrieve a value
						var bannerValueArray = new Array();
						if(window.localStorage.getItem('memberyBanner'))
							bannerValueArray = JSON.parse(window.localStorage.getItem('memberyBanner'));
						bannerValueArray.pushIfNotExist(resultJson);
						console.log(bannerValueArray);
						var bannerContents = "";
						for(var i = 0 ; i < bannerValueArray.length; i++) {
							console.log('bannerValueArray[i].bannerDat', bannerValueArray[i].bannerDat);
							bannerContents = bannerContents + unescape(bannerValueArray[i].bannerDat);
							console.log('bannercontents', bannerContents);
						}
						var footerHTML = $('.scrollable-footer').html();
						document.querySelector(".scrollable-content").innerHTML = bannerContents + '<div class=\"scrollable-footer\">' + footerHTML + '</div>';
						// To store a value
						//window.localStorage.setItem('memberyBanner', 'test');
						window.localStorage.setItem('memberyBanner', JSON.stringify(bannerValueArray));
						//db.transaction(populateDB(tx, obj[0].url, this.result), errorCB, successCB);
						window.location.href = obj[0].url;
					},
					function (error) {
		  				alert("Scanning failed: " + error);
					}

					reader.readAsText(file);
				});

			}
	
	
		
			// adds an element to the array if it does not already exist using a comparer 
			// function
			Array.prototype.pushIfNotExist = function(val) {
    			if (typeof(val) == 'undefined' || val == '') { return }
    			//val = val.replace(/^\s+|\s+$/g, "");
    			if (this.indexOf(val) == -1) {
        			this.push(val);
    			}
			}
		});
	});
});