'use babel';

import app from 'app';
import Menu from 'menu';
import MenuItem from 'menu-item';
import BrowserWindow from 'browser-window';

require('crash-reporter').start();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 480,
    height: 360,
    'min-width': 480,
    'min-height': 280,
    frame: true,
  });
  mainWindow.loadUrl(`file://${__dirname}/index.html`);
  mainWindow.on('closed', () => {
    //mainWindow = null;
  });

  // Example of menu from official sample
  // https://github.com/atom/electron/blob/master/atom/browser/default_app/default_app.js
  if (process.platform == 'darwin') {
    var template = [{
      label: 'Electron',
      submenu: [{
        label: 'About Electron',
        selector: 'orderFrontStandardAboutPanel:',
      }, {
        type: 'separator',
      }, {
        label: 'Services',
        submenu: [],
      }, {
        type: 'separator',
      }, {
        label: 'Hide Electron',
        accelerator: 'Command+H',
        selector: 'hide:',
      }, {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:',
      }, {
        label: 'Show All',
        selector: 'unhideAllApplications:',
      }, {
        type: 'separator',
      }, {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: () => {
          app.quit();
        },
      },],
    }, {
      label: 'Edit',
      submenu: [{
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:',
      }, {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:',
      }, {
        type: 'separator',
      }, {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:',
      }, {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:',
      }, {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:',
      }, {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:',
      },],
    }, {
      label: 'View',
      submenu: [{
        label: 'Reload',
        accelerator: 'Command+R',
        click: () => {
          mainWindow.restart();
        },
      }, {
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',
        click: () => {
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
        },
      }, {
        label: 'Toggle Developer Tools',
        accelerator: 'Alt+Command+I',
        click: () => {
          mainWindow.toggleDevTools();
        },
      },],
    }, {
      label: 'Window',
      submenu: [{
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:',
      }, {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:',
      }, {
        type: 'separator',
      }, {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:',
      },],
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click: () => {
          require('shell').openExternal('http://electron.atom.io');
        },
      }, {
        label: 'Documentation',
        click: () => {
          require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme');
        },
      }, {
        label: 'Community Discussions',
        click: () => {
          require('shell').openExternal('https://discuss.atom.io/c/electron');
        },
      }, {
        label: 'Search Issues',
        click: () => {
          require('shell').openExternal('https://github.com/atom/electron/issues');
        },
      },],
    },];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  } else {
    var template = [{
      label: '&File',
      submenu: [{
        label: '&Open',
        accelerator: 'Ctrl+O',
      }, {
        label: '&Close',
        accelerator: 'Ctrl+W',
        click: () => {
          mainWindow.close();
        },
      },],
    }, {
      label: '&View',
      submenu: [{
        label: '&Reload',
        accelerator: 'Ctrl+R',
        click: () => {
          mainWindow.restart();
        },
      }, {
        label: 'Toggle &Full Screen',
        accelerator: 'F11',
        click: () => {
          mainWindow.setFullScreen(!mainWindow.isFullScreen());
        },
      }, {
        label: 'Toggle &Developer Tools',
        accelerator: 'Alt+Ctrl+I',
        click: () => {
          mainWindow.toggleDevTools();
        },
      },],
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click: () => {
          require('shell').openExternal('http://electron.atom.io');
        },
      }, {
        label: 'Documentation',
        click: () => {
          require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme');
        },
      }, {
        label: 'Community Discussions',
        click: () => {
          require('shell').openExternal('https://discuss.atom.io/c/electron');
        },
      }, {
        label: 'Search Issues',
        click: () => {
          require('shell').openExternal('https://github.com/atom/electron/issues');
        },
      },],
    },];
    const menu = Menu.buildFromTemplate(template);
    mainWindow.setMenu(menu);
  }
});
