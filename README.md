# html-webpack-plugin-remove

[![Latest Version on NPM](https://img.shields.io/npm/v/html-webpack-plugin-remove.svg?style=flat-square)](https://www.npmjs.com/package/html-webpack-plugin-remove)

Remove parts of html emitted by the html-webpack-plugin using a regular expression.

The plugin hooks into events emitted by the html-webpack-plugin and simply replaces the parts that match a passed in regular expression.

### Install
```bash
npm i html-webpack-plugin-remove --save-dev
```

### webpack.config.js
```js
const HtmlPlugin = require('html-webpack-plugin')
const HtmlPluginRemove = require('html-webpack-plugin-remove')

module.exports = {
	/* ... */
	plugins: [
		new HtmlPlugin(/* ... */),
		new HtmlPluginRemove(/<script.*?src="style\..*?\.js".*?<\/script>/)
	]
}
```
