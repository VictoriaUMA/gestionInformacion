const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('notifyBtn')

notifyBtn.addEventListener('click', function (event) {
	const modalPath = path.join('file://', __dirname, 'muestras.html')  
	let win = new BrowserWindow({ frame: true, 
		transparent: false, 
		width: 800, 
		height: 600 })
	win.on('close', function () { win = null })
	win.loadURL(modalPath)
	win.show()
})

