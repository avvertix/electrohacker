/// <reference path="typings/node/node.d.ts"/>
var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
const crashReporter = require('electron').crashReporter;


// Report crashes to our server.
crashReporter.start({
  productName: 'ElectroHacker',
  companyName: 'AVSoft',
  submitURL: 'https://avsoft.it/electrohacker-crash',
  autoSubmit: false
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.


app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
      width: 800, 
      height: 600, 
      minWidth: 420,
      minHeight: 400,
      icon: 'images/logo.png'
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  
  // app.addRecentDocument('C:/ciao.txt');

//mainWindow.setProgressBar(0.5);
  // Open the devtools.
  // mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});