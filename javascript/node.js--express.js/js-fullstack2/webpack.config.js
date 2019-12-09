const path = require('path');
const htmlWPPlugin = require('html-webpack-plugin');
const minCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry : './frontend/app.js',
    output : {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    devMode ? 'style-loader' : minCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWPPlugin({
            template : "frontend/index.html",
            minify: {
                collapseWhitespace : true,
                removeComments : true,
                removeRedundantAttributtes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDocType: true
            }
        }),
        new minCssExtractPlugin({
            filename : 'css/bundle.css'
        })
    ],
    devtool : 'source-map'
};