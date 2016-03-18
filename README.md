#Install Instructions
## Requirements
	The latest npm (the package manager for javascript) is required.
## Cordova
	Execute install.sh script at the root directory of the project. This script will install Cordova and all necessary Bower modules.
## Android SDK
	https://developer.android.com/sdk/installing/index.html

## Add Android Platform
	All necessary cordova plugins and customized code for each platform will be installed after adding a specific platform.
	cordova platform add android
### Copy the keystore file "memberymobile.keystore" to your desired path

	e.g.
	/home/me/Documents/keystore/mykey.keystore

### Add release signing properties file.
	Create a file called 'platforms/android/release-signing.properties', and copy the following text:

	storeFile=/path/to/your-keystore.keystore
	storeType=jks
	keyAlias=some-key
	// if you don't want to enter the password at every build, use this:
	keyPassword=your-key-password
	storePassword=your-store-password

	Make sure the storeFile is directed to the path where the keystore file is copied.

## Configure App-Endpoint
	change ./config.xml param url.
## Build APK
	cordova build or cordova run (includes build)
	### Android build
	cordova build android
	### Android run
	cordova run android
	### iOS build
	cordova build ios
	### iOS run
	cordova run iod

## Release Build (Android)
	Open the config.xml file and edit the following part to change the release version.
	<widget id="com.unionsoft.MemberyMobile" version="0.0.1" android-versionCode ="20" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">

	The version you need to update is android-versionCode ="20" where "20" is the version you are updating.

	After saving the config.xml, simply execute "./makeandroid.sh version_no". This shell script runs "cordova build android --release" as well as renaming the apks with a version number.

	After the successful build, the APKs will be saved at platforms/android/build/outputs/apk with the following file names.

	ARM version: main.000001.com.unionsoft.MemberyMobile-armv7.apk
	X86 version: main.000001.com.unionsoft.MemberyMobile-x86.apk

	"000001" is the version number added to the files.

## Debugging Android App
In chrome open uri
	chrome://inspect
	
