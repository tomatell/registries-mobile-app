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
		  window.location.href = obj[0].url;
		}, 
		function (error) {
		  alert("Scanning failed: " + error);
		}
	);
	});

});