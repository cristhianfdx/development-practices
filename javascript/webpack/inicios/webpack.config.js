module.exports = {
    entry : './src/js/index.js',
    output: {
        path : __dirname + "/dist" ,
        filename : 'main.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/, 
                use: [                    
                    {   
                        loader : "style-loader" 
                    },
                    {   
                        loader : "css-loader",
                        options:{
                            modules :true
                        }   
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude : /node_modules/,
                use:{
                    loader: 'babel-loader',                
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }                
            }
        ]
    }
}

