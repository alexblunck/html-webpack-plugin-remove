# html-webpack-plugin-remove
Remove parts of html emitted by the html-webpack-plugin using a regular expression.

The plugin hooks into events emitted by the html-webpack-plugin and simply replaces the parts that match a passed in regular expression.

### Install
```bash
npm i html-webpack-plugin-remove --save-dev
```

### webpack.config.js
```js
import HtmlPlugin from 'html-webpack-plugin'
import HtmlPluginRemove from 'html-webpack-plugin-remove'

export default {
	/* ... */
	plugins: [
		new HtmlPlugin(/* ... */),
		new HtmlPluginRemove(/<script.*?src="style\..*?\.js".*?<\/script>/)
	]
}
```

> **Note** I'm just getting into webpack, so please don't judge too harshly ;)