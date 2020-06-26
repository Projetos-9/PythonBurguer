const {app,BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width:500, 
    height:600,
    resizable:false,
    frame:false
  });
  mainWindow.loadURL('file://' + __dirname + '/materialize/login.html');

  mainWindow.webContents.openDevTools();
}); 