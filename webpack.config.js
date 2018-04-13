const webpack = require('webpack');

const config = {
    entry: __dirname + '/static/js/index.jsx',
    output: {
        path: __dirname + '/static/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: __dirname + '/node_modules/',
                // include: __dirname + '/static',
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    mode: "development",
};

module.exports = config;
