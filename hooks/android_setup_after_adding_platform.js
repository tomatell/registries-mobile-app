#!/usr/bin/env node


// no need to configure below
 
var fs = require('fs');
var path = require("path");

copyMainActivity();

function copyMainActivity () {
	var srcPath4MainActivity = path.join(__dirname, '../', 'src/com/unionsoft/MemberyMobile/MainActivity.java');
	var dstPath4MainActivity = path.join(__dirname, '../', 'platforms/android/src/com/unionsoft/MemberyMobile/MainActivity.java');
	var srcPath4ReleaseSigning = path.join(__dirname, '../', 'release-signing.properties');
	var dstPath4ReleaseSigning = path.join(__dirname, '../', 'platforms/android/release-signing.properties');


	console.log ('copying from '+srcPath4MainActivity+' to the '+dstPath4MainActivity);
	// so, here we start to copy MainActivity.java to platform asset
	fs.createReadStream(srcPath4MainActivity).pipe(fs.createWriteStream(dstPath4MainActivity));
	console.log ('copying from '+srcPath4MainActivity+' to the '+dstPath4MainActivity);
	fs.createReadStream(srcPath4ReleaseSigning).pipe(fs.createWriteStream(dstPath4ReleaseSigning));
}


// echo "======================================================================================================="

// set

// echo $1

// android/src/unionsoft/MemberyMobile/MainActivity.java