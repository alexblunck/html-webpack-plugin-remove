/**
 * @constructor
 *
 * @param {RegExp} test - Remove match from html
 */
function HtmlWebpackPluginRemove(test) {
    this.test = test;
}

const HtmlWebpackPlugin = require('html-webpack-plugin');

HtmlWebpackPluginRemove.prototype.apply = function (compiler) {
    const test = this.test;
    const pluginName = 'HtmlWebpackPluginRemove';
    if ('hooks' in compiler) {
        // v4 approach:
        compiler.hooks.compilation.tap(pluginName, (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
                pluginName, // <-- Set a meaningful name here for stacktraces
                (data, cb) => {
                    // Manipulate the content
                    data.html = data.html.replace(test, "");
                    // Tell webpack to move on
                    cb(null, data)
                }
            )
        });
    } else {
        compiler.plugin("compilation", function (compilation) {
            // Hook into html-webpack-plugin event
            compilation.plugin('html-webpack-plugin-after-html-processing', function (pluginData, cb) {
                pluginData.html = pluginData.html.replace(test, '');

                if (cb) {
                    cb(null, pluginData);
                } else {
                    return Promise.resolve(pluginData)
                }
            });
        });
    }
};

module.exports = HtmlWebpackPluginRemove;
