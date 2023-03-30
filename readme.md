# <img src="assets/Icon.png" width="40" align="left">GChat

> Unofficial Google Chat app

## Download

[Current Release](https://github.com/dcrousso/GChat/releases/latest)

#### Linux Shortcut

Create a file in `~/.local/share/applications/` called `GChat.desktop` with the following contents:

```
[Desktop Entry]
Name=GChat
Exec=/path/to/GChat
Terminal=false
Type=Application
Icon=/path/to/GChat/resources/app/assets/Icon.png
```

Replace all instances of `/path/to` with the actual path of the GChat app.

## Development

> Made with [Electron](http://electron.atom.io).

<table>
	<tr>
		<td>Init</td>
		<td><code>npm install</code></td>
	</tr>
	<tr>
		<td>Run</td>
		<td><code>npm start</code></td>
	</tr>
	<tr>
		<td>Build</td>
		<td><code>npm run build</code></td>
	</tr>
	<tr>
		<td>Build macOS</td>
		<td><code>npm run build-darwin</code></td>
	</tr>
	<tr>
		<td>Build Windows</td>
		<td><code>npm run build-win32</code></td>
	</tr>
	<tr>
		<td>Build Linux</td>
		<td><code>npm run build-linux</code></td>
	</tr>
</table>

## License

MIT © [Devin Rousso](http://devinrousso.com)
