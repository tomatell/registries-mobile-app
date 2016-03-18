#!/bin/bash
if [ $# -eq 0 ]
  then echo 'The build version number is empty. Type makeandroid.sh 000xxx'
else
cordova build android --release 
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
mv $DIR/platforms/android/build/outputs/apk/android-armv7-release.apk $DIR/platforms/android/build/outputs/apk/main.$1.com.unionsoft.MemberyMobile-armv7.apk
mv $DIR/platforms/android/build/outputs/apk/android-x86-release.apk $DIR/platforms/android/build/outputs/apk/main.$1.com.unionsoft.MemberyMobile-x86.apk
fi
