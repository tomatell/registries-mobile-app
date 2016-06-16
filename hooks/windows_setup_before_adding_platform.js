#!/usr/bin/env node

//this hook installs all your plugins
 
// add your plugins to this list--either 
// the identifier, the filesystem location 
// or the URL
var pluginlist = [
    "phonegap-plugin-barcodescanner",
    "https://github.com/apache/cordova-plugin-file-transfer.git",
    "https://github.com/tomatell/PushPlugin.git",
    "cordova-plugin-device",
    "org.apache.cordova.media",
    "https://github.com/danjarvis/cordova-plugin-crosswalk-certificate",
    "cordova-plugin-statusbar",
    "cordova-plugin-globalization",
    "org.apache.cordova.dialogs"
];
 
// no need to configure below
 
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
 
function puts(error, stdout, stderr) {
    console.log(stdout);
}
 
pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});

// echo "======================================================================================================="

// set

// echo $1

// android/src/unionsoft/MemberyMobile/MainActivity.java