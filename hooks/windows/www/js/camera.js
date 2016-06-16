

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
			//console.log(obj[0]);
			//alert("url:" + obj[0].url);
			//alert("bannerDat:" + obj[0].bannerDat);
			var fileTransfer = new FileTransfer();
			var uri = encodeURI(obj[0].url+obj[0].bannerDat);
			var fileURL = cordova.file.dataDirectory + 'banner.dat';
            var uregid = '';
        
            if(regId) {
               uregid = regId;
            }
            var exeCode = "if(browser) browser.close();browser = window.open('" + obj[0].url + "?regid=" + uregid + "', '_self', 'location=no, zoom=no, toolbarWidth=25, toolbarHeight=25'); browser.addEventListener('loaderror', function(event) { navigator.notification.alert('error: ' + event.message); }); browser.addEventListener('exit', function(event) { navigator.notification.alert(event.type); });";
			fileTransfer.download(
    			uri,
    			fileURL,
    			function(entry) {
        			//alert("download complete: " + entry.toURL());
        			//This alias is a read-only pointer to the app itself
					window.resolveLocalFileSystemURL(fileURL, gotFile, fail);
   				 },
    			function(error) {
        			navigator.notification.alert("download error source " + error.source);
        			navigator.notification.alert("download error target " + error.target);
        			//alert("upload error code" + error.code);
    			},
    			true
			);
			function fail(e) {
				navigator.notification.alert("FileSystem Error");
				navigator.notification.alert(e);
			}
			

			function gotFile(fileEntry) {

				fileEntry.file(function(file) {
					var reader = new FileReader();

					reader.onloadend = function(e) {
						//var replaceReg = '?regid=' + regId;
						var bannerResult = escape(this.result).replace('%24code', exeCode);
						//bannerResult = bannerResult.replace('%24url', obj[0].url);
						var resultJson = JSON.parse('{ \"url\" : \"' + obj[0].url + '\", \"bannerDat\": \"' + bannerResult + '\" }');
						console.log(resultJson);
						// To retrieve a value
						var bannerValueArray = new Array();
						if(window.localStorage.getItem('memberyBanner'))
							bannerValueArray = JSON.parse(window.localStorage.getItem('memberyBanner'));
						bannerValueArray.pushIfNotExist(resultJson);

						window.localStorage.setItem('memberyBanner', JSON.stringify(bannerValueArray));
						location.reload();
						//browser = window.inAppBrowserXwalk.open(obj[0].url + '#/login?regid=' + regId, '_blank', 'location=yes, zoom=no, toolbarWidth=25, toolbarHeight=25');
                        window.open(obj[0].url + '#/login?regid=' + regId, '_self', 'location=yes, zoom=no, toolbarWidth=25, toolbarHeight=25');
					},
					function (error) {
		  				navigator.notification.alert("Scanning failed: " + error);
					}

					reader.readAsText(file);
				});

			}
	
	
		
			// adds an element to the array if it does not already exist using a comparer 
			// function
			Array.prototype.pushIfNotExist = function(val) {
    			if (typeof(val) == 'undefined' || val == '') { return }
    			var arrExists = false;
    			for(var i = 0; i < this.length; i++) {
    				if(this[i].url === val.url)
    					arrExists = true;
    			}

    			if (!arrExists) {
        			this.push(val);
    			}
			}
		});
	});