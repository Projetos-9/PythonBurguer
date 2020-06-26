const {app,BrowserWindow} = require('electron');

let mainWindow = null;
let index = null;


app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width:500, 
    height:1600,
    resizable:false,
    frame:false,
    modal: true,
    parent:index
  });
  index = new BrowserWindow({
    width:500, 
    height:600,
    resizable:false,
    frame:false

  });

  index.loadURL('file://' + __dirname + '/view/index.html');

  
  mainWindow.loadURL('file://' + __dirname + '/view/login.html');
  
  //mainWindow.webContents.openDevTools();
}); 