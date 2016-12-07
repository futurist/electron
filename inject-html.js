const {app, BrowserWindow} = require('electron')

app.on('ready', v=>{
  let option = {
    transparent: true,
    frame: false,
    width: 800,
    height: 600
  }
  let win = new BrowserWindow(option)
	win.on('closed', () => {
		win = null
		app.quit()
	})

  // win.toggleDevTools()
  win.show()
  console.log(win, Object.getOwnPropertyNames(win), win.webContents)
  let con = win.webContents
	let html=`
<style>
body{font-size:33px; color: white;}
button {
  -webkit-app-region: no-drag;
}
</style>
<body style="-webkit-app-region: drag">
<p>Hello, World!\`sdf</p>
</body>
`
  con.loadURL(`data:text/html,${html}`)
	console.log(con.insertText)
  con.insertText('window.alert(1113)')
})
