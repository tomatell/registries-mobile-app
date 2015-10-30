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
cordova plugin add https://github.com/apache/cordova-plugin-file-transfer.git
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
cordova plugin add cordova-plugin-device
cordova plugin add org.apache.cordova.media
cordova plugin add https://github.com/danjarvis/cordova-plugin-crosswalk-certificate
cordova platform add android
cp -r src platforms/android
cp build.gradle platforms/android
mvn install:install-file -DgroupId=org.xwalk -DartifactId=xwalk_core_library_beta -Dversion=15.0.0.0 -Dpackaging=aar -Dfile=xwalk_core_library.aar -DgeneratePom=true
cp -r ~/.m2/repository/org/xwalk ANDROID_HOME/extras/google/m2repository/org/
