const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
<<<<<<< HEAD
const CopyWebpackPlugin = require('copy-webpack-plugin')
=======
>>>>>>> 47e8455e8da0d5e8e222c146de5a54ea282204fb

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
          }),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
          })
    ]    
}
