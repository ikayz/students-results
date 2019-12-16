# Students Results
This is a simple CRUD app created using React Native and Firebase as the database. Expo was not used when creating this project.

## Dependencies
Android SDK
Android SDK Build Tools (Platform Tools)
Android Studio (For the SDK and Build tools)
React Native CLI
React
Node JS

## Installation
Install the dependencies need by running the command below

```npx install -g react-native-cli```

From the project root run
```npm install or yarn```

## Known issue metro bundler fix
When you run ```npx react-native run-android``` from the project root directory, the app should run with a command window that has "Metro bundler running on localhost:8081 and a node command tool" Should they close on their own. Make changes to the following file.

Copy the code below and replace in *[project_name]\node_modules\metro-config\src\defaults\blacklist.js*
Note you'd have to do this for every time you run ```npm install``` as the node_modules get updated. This is a known issue with metro bundler.

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle.js /,
  /.*\/__tests__\/.*/
];
```

## Running the app
Running or starting the app after all the dependencies have been install.
```npx react-native run-android or react-native run-android```

## Known bug
Pressing the update fails to populate the input fields. This is due to a communication error, fix yet to found.
