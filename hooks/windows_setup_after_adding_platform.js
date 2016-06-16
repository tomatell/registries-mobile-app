#!/usr/bin/env node


// no need to configure below
 
var fs = require('fs');
var path = require("path");

copyMainActivity();

function copyMainActivity () {

	var srcPath4JSCompat = path.join(__dirname, '.', 'windows/www/js/winstore-jscompat.js');
	var dstPath4JSCompat = path.join(__dirname, '../', 'platforms/windows/www/js/winstore-jscompat.js');
	var srcPath4Index = path.join(__dirname, './', 'windows/www/index.html');
	var dstPath4Index = path.join(__dirname, '../', 'platforms/windows/www/index.html');

	console.log ('copying from '+srcPath4JSCompat+' to the '+dstPath4JSCompat);
	// so, here we start to copy winstore-jscompat.js to platform asset
	fs.createReadStream(srcPath4JSCompat).pipe(fs.createWriteStream(dstPath4JSCompat));
	// so, here we start to copy index.html to platform asset
	console.log ('copying from '+srcPath4Index+' to the '+dstPath4Index);
	fs.createReadStream(srcPath4Index).pipe(fs.createWriteStream(dstPath4Index));
	
}


// echo "======================================================================================================="

// set

// echo $1
