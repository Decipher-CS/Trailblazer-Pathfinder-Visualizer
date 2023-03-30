const { app, Menu, BrowserWindow, ipcMain, webContents } = require('electron')
const path = require('path')

const isMac = process.platform === 'darwin'

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        //   preload: path.join(__dirname, 'preload.js')
        // }
    })

    // win.loadFile('index.html')
    win.loadURL('http://localhost:5173/')
    win.webContents.openDevTools()
    win.webContents.on('context-menu', ()=>{
        contextMenu.popup()
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
