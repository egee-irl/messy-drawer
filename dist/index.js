// Generated by CoffeeScript 2.5.1
(function() {
  var BrowserWindow, app;

  ({app, BrowserWindow} = require('electron'));

  app.on('ready', function() {
    var win;
    win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });
    win.loadFile('../public/index.html');
    return win.webContents.openDevTools();
  });

  app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
      return app.quit();
    }
  });

}).call(this);
