var { app, BrowserWindow } = require('electron');

var mainWindow;

app.on('window-window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 1200, height: 800});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.openDevTools();
    mainWindow.on('close', function() {
        mainWindow = null;
    })    
})