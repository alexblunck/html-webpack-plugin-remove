/**
 * @constructor
 *
 * @param {RegExp} test - Remove match from html
 */
function HtmlWebpackPluginRemove (test) {
    this.test = test;
}

HtmlWebpackPluginRemove.prototype.apply = function(compiler) {
    var test = this.test;

    compiler.plugin("compilation", function(compilation) {
        // Hook into html-webpack-plugin event
        compilation.plugin('html-webpack-plugin-after-html-processing', function(pluginData, cb) {
            pluginData.html = pluginData.html.replace(test, '');

            if (cb) {
                cb(null, pluginData);
            } else {
                return Promise.resolve(pluginData)
            }
        });
    });
};

module.exports = HtmlWebpackPluginRemove;
