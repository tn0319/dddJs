// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/dddJs' : '',
    outputDir: 'docs',
    devServer: {
        historyApiFallback: true,
      },
}