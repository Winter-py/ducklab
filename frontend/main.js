const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadURL('http://localhost:8080/stats'); // Temporary, replace with UI later
}

app.whenReady().then(createWindow);
