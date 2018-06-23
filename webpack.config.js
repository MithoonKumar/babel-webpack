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
                    { test: /\.css$/, loader: 'style-loader!css-loader' },
                    { test: /\.js$/, loader: 'babel-loader', query: {presets: ['es2015'] }}
            ]
    },
    externals: {
    jquery: 'jQuery'   // this will tell the bundles not import jQuery in js file when found in js files
  }
}
