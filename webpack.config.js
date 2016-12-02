var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/react/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            },
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    sassLoader: {
        sourceMap: true
    }
};