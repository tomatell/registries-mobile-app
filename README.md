# Install Instructions

## Cloning the repositories
git clone https://phabricator.kepler.launcher.sk/diffusion/MMA/mbry-mobile-app.git

## Requirements
	### The latest npm (the package manager for javascript) is required.
        ### Node Version Manager (nvm)
        ### JDK 1.8 or later
        ### Android SDK or Android Studio
        ### Apache Cordova

## NPM
Install node by running the following command:

```
sudo apt-get install node
```

## NVM
Install nvm by running the following command:

```
npm install nvm -g
```

## JDK
Install the latest JDK from here: [[ http://www.oracle.com/technetwork/java/javase/downloads/index.html | Java SE Downloads ]]
 ### PATH and CLASSPATH for Linux

 you should set the path variable if you want to be able to run the executables (javac, java, javadoc, and so on) from any directory without having to type the full path of the command. If you do not set the PATH variable. Open an terminal and go to your home directory, then edit .bashrc and add the following environmental variables:

```
export JAVA_HOME=/{Full path to your JDK directory}/:$JAVA_HOME
export PATH=${JAVA_HOME}/bin:$PATH
```
## Android SDK
 ### Download: https://developer.android.com/studio/index.html#linux-bundle
 ### Installation: https://developer.android.com/sdk/installing/index.html
 ### PATH and CLASSPATH for Linux

```
export PATH=${PATH}:{Full path to Android SDK}/android-sdk-linux/tools
export PATH=${PATH}:{Full path to Android SDK}/android-sdk-linux/platform-tools
```

## Apache Cordova
	Execute install.sh script at the root directory of the project. This script will install Cordova and all necessary Bower modules. However, you could also install Cordova by executing the following command:

```
npm install cordova -g
```

Make sure you install Cordova globally using the option switch "-g".

## Add Android Platform
	All necessary cordova plugins and customized code for each platform will be installed after adding a specific platform.
	cordova platform add android
### Copy the keystore file "memberymobile.keystore" to your desired path

	e.g.
	/home/me/Documents/keystore/mykey.keystore

        Here is the keystore and release-signing.properties you can download. The image below ("Download") is encoded in steganography.  Download this image to your local PC and rename the file name with an extension .zip. Then you can decompress the keystore and release-signing.properties.

{F4231}

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
 

  

  # Android build:
   cordova build android
  #  Android run:
   cordova run android
  #  iOS build:
   cordova build ios
  # iOS run:
   cordova run ios

## iOS specific settings
The status bar in iOS has to be removed due to its usability and design. In order to remove the status bar, you need to run XCode and change the settings.
After creating a iOS platform project, go to platforms/ios and execute the following project file:
{F4247}
XCode will be run.  From the XCode IDE, click on "Membery Mobile" from the left pane. Then check the "Hide status bar' at "Deployment Info" of the General settings.
{F4249}

## Release Build (Android)
	Open the config.xml file and edit the following part to change the release version.
	<widget id="com.unionsoft.MemberyMobile" version="0.0.1" android-versionCode ="20" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">

	The version you need to update is android-versionCode ="20" where "20" is the version you are updating.

	After saving the config.xml, simply execute "./makeandroid.sh version_no". This shell script runs "cordova build android --release" as well as renaming the apks with a version number.

	After the successful build, the APKs will be saved at platforms/android/build/outputs/apk with the following file names.

	ARM version: main.000001.com.unionsoft.MemberyMobile-armv7.apk
	X86 version: main.000001.com.unionsoft.MemberyMobile-x86.apk

	"000001" is the version number appended to the files.

## Debugging Android App
In chrome open uri
	chrome://inspect

## References.
[[ https://cordova.apache.org/ | Apache Cordova ]]
[[ https://crosswalk-project.org/ | Crosswalk Project ]]
	