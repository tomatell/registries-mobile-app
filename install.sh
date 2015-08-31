#!/bin/bash
sudo npm install cordova -g
bower install jquery
bower install bootstrap-sass-official
bower install angular-animate
bower install angular-cookies
bower install angular-resource
bower install angular-route
bower install angular-sanitize
bower install angular-touch
cordova plugin add https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview --variable XWALK_VERSION="14+" --variable XWALK_COMMANDLINE="--disable-pull-to-refresh-effect" --variable XWALK_MODE="embedded"
cordova plugin add phonegap-plugin-barcodescanner
cordova platform add android
