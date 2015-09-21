#!/bin/bash
if [ $# -eq 0 ]
  then echo 'The build version number is empty. Type makeandroid.sh 000xxx keystorepath.'
#elif [ -z "$2" ]
#  then echo 'The build keystore path is empty. Type makeandroid.sh 000xxx keystorepath.'
else
cordova build android --release
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
#jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $2 $DIR/platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk MemberyMobile
#jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $2 $DIR/platforms/android/build/outputs/apk/android-x86-release-unsigned.apk MemberyMobile
mv $DIR/platforms/android/build/outputs/apk/android-armv7-release.apk $DIR/platforms/android/build/outputs/apk/main.000001.com.unionsoft.MemberyMobile.apk
mv $DIR/platforms/android/build/outputs/apk/android-x86-release.apk $DIR/platforms/android/build/outputs/apk/main.$1.com.unionsoft.MemberyMobile-x86.apk
#zipalign -f -v 4 $DIR/platforms/android/build/outputs/apk/main.$1.com.unionsoft.MemberyMobile-unaligned.apk $DIR/platforms/android/build/outputs/apk/main.$1.com.unionsoft.MemberyMobile.apk
#zipalign -f -v 4 $DIR/platforms/android/build/outputs/apk/main.$1.com.unionsoft.MemberyMobile-x86-unaligned.apk $DIR/platforms/android/build/outputs/apk/main.$1.com.unionsoft.MemberyMobile-x86.apk
fi
