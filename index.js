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
        compilation.plugin('html-webpack-plugin-before-html-processing', function(pluginData, cb) {
            pluginData.html = pluginData.html.replace(test, '');
            cb();
        });
    });
};

module.exports = HtmlWebpackPluginRemove;
