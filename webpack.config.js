module.exports = {
    //define entry point
    entry: './src/js/app',
    //define output point
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
        publicPath: __dirname + '/build/' // this will geanerate the path of img files
    },
    module: {
         loaders: [
                    { test: /\.css$/, loader: 'style-loader!css-loader' },
                    {
                      test: /\.(gif|png|jpe?g|svg)$/i,
                      use: [
                        'file-loader?name=/img/[name].[ext]',   //this is the path where image files will be put
                        {
                          loader: 'image-webpack-loader',
                        },
                      ]
    }
            ],
            noParse: /one/ // this will not parse one.js file but the file will be include as it is.
    }

}
