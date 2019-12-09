module.exports ={
    entry: "./src/index.js",
    output:{
        path : "/",
        filename: "main.js"
    },
    devtool: "source-map",
    module:{
        rules:[
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
