module.exports = {
    //define entry point
    entry: './src/js/app',
    //define output point
    output: {
        path: __dirname +  '/build',
        filename: 'bundle.js'
    },
    module: {
         loaders: [
                    { test: /\.css$/, loader: 'style-loader!css-loader' }
            ],
            noParse: /one/ // this will not parse one.js file but the file will be include as it is.
    }

}
