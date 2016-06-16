#!/usr/bin/env node


// no need to configure below
 
var fs = require('fs');
var path = require("path");

copyMainActivity();

function copyMainActivity () {

	var srcPath4GCMIntentService = path.join(__dirname, '../', 'src/com/plugin/gcm/GCMIntentService.java');
	var dstPath4GCMIntentService = path.join(__dirname, '../', 'platforms/android/src/com/plugin/gcm/GCMIntentService.java');
	var srcPath4BuildExtraGradle = path.join(__dirname, '../', 'src/com/unionsoft/MemberyMobile/build-extra.gradle');
	var dstPath4BuildExtraGradle = path.join(__dirname, '../', 'platforms/android/build-extra.gradle');
	var dstPath4BuildGradle = path.join(__dirname, '../', 'platforms/android/build.gradle');
	var srcPath4MainActivity = path.join(__dirname, '../', 'src/com/unionsoft/MemberyMobile/MainActivity.java');
	var dstPath4MainActivity = path.join(__dirname, '../', 'platforms/android/src/com/unionsoft/MemberyMobile/MainActivity.java');
	var srcPath4ReleaseSigning = path.join(__dirname, '../', 'release-signing.properties');
	var dstPath4ReleaseSigning = path.join(__dirname, '../', 'platforms/android/release-signing.properties');

	console.log ('copying from '+srcPath4GCMIntentService+' to the '+dstPath4GCMIntentService);
	// so, here we start to copy GCMIntentService.java to platform asset
	fs.createReadStream(srcPath4GCMIntentService).pipe(fs.createWriteStream(dstPath4GCMIntentService));
	// so, here we start to copy build-extra.gradle to platform asset
	console.log ('copying from '+srcPath4BuildExtraGradle+' to the '+dstPath4BuildExtraGradle);
	fs.createReadStream(srcPath4BuildExtraGradle).pipe(fs.createWriteStream(dstPath4BuildExtraGradle));
	// so, here we start to copy build.gradle to platform asset
	console.log ('appending configurations '+' to the '+dstPath4BuildGradle);
	
	fs.appendFile(dstPath4BuildGradle, `configurations { all*.exclude group: 'com.android.support', module: 'support-v4' }`, function (err) {
		if (err) throw err;
  		console.log('The "data to append" was appended to file!');
	});
	console.log ('copying from '+srcPath4MainActivity+' to the '+dstPath4MainActivity);
	// so, here we start to copy MainActivity.java to platform asset
	fs.createReadStream(srcPath4MainActivity).pipe(fs.createWriteStream(dstPath4MainActivity));
	console.log ('copying from '+srcPath4ReleaseSigning+' to the '+dstPath4ReleaseSigning);
	fs.createReadStream(srcPath4ReleaseSigning).pipe(fs.createWriteStream(dstPath4ReleaseSigning));
}


// echo "======================================================================================================="

// set

// echo $1

// android/src/unionsoft/MemberyMobile/MainActivity.java