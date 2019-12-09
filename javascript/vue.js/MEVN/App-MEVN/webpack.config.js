const {VueLoaderPlugin} = require('vue-loader');

module.exports={
    entry: './src/app/main.js',
    output:{
        path: __dirname + '/src/public/js',
        filename:'bundle.js'
    }, 
    module:{
        rules:[
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude : /node_modules/,
                use:{
                    loader: 'babel-loader'                 
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};