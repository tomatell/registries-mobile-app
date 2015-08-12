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
		  window.location.href = result.text;
		}, 
		function (error) {
		  alert("Scanning failed: " + error);
		}
	);
	});

});
