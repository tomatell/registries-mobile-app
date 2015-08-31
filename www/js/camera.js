$(document).ready(function(){

	$('#scanner').click( function(){
		
		console.log('clicked');
	
		cordova.plugins.barcodeScanner.scan(
		function (result) {
		  alert("We got a barcode\n" +
				"Result: " + result.text + "\n" +
				"Format: " + result.format + "\n" +
				"Cancelled: " + result.cancelled);
		  //document.getElementById("frame").src = result.text;

		  var obj = JSON.parse('[' + result.text + ']'); 
		  console.log(obj[0]);
		  alert("url:" + obj[0].url);
		  alert("bannerDat:" + obj[0].bannerDat);
		  var fileTransfer = new FileTransfer();
var uri = encodeURI(obj[0].url+obj[0].bannerDat);
var fileURL = cordova.file.dataDirectory + 'banner.dat';
fileTransfer.download(
    uri,
    fileURL,
    function(entry) {
        alert("download complete: " + entry.toURL());
        //This alias is a read-only pointer to the app itself
		window.resolveLocalFileSystemURL(fileURL, gotFile, fail);
    },
    function(error) {
        alert("download error source " + error.source);
        alert("download error target " + error.target);
        alert("upload error code" + error.code);
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
			alert("Text is: "+this.result);
			document.querySelector(".scrollable-content").innerHTML = this.result;
			var db = window.openDatabase("Database", "1.0", "Membery", 200000);
			db.transaction(populateDB(tx, obj[0].url, this.result), errorCB, successCB);
		}

		reader.readAsText(file);
	});

}

// Populate the database
    //
    function populateDB(tx, url, data) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS MEMBERY (id unique, data)');
        tx.executeSql('INSERT INTO MEMBERY (id, data) VALUES (url, data)');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        alert("success!");
    }
		  window.location.href = obj[0].url;
		}, 
		function (error) {
		  alert("Scanning failed: " + error);
		}
	);
	});

});