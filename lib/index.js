"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
/*
TO sync changes
const electron = require('electron');
const path = require('path');

// the first argument can be: a file, directory or glob pattern
require('electron-reload')(__dirname + '../ui/index.html', {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
*/
electron_1.app.on('ready', () => {
    const window = new electron_1.BrowserWindow({ width: 1300, height: 760 });
    window.setMenuBarVisibility(false);
    // load a website to display
    window.loadURL('http://localhost:8000');
    window.webContents.openDevTools()
    //to add chrome dev tools 
    //window.webContents.openDevTools();
});
