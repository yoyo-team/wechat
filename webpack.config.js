var path = require('path');
var webpack = require('webpack');

module.exports=
    {
        entry: './src/entry.js',
        output:
            {
                path: path.join(__dirname, 'dist'),
                filename: 'build.js'
            },
        module:
            {
                loaders:
                    [
                        {
                            test: /\.vue$/,
                            loader: 'vue-loader'
                        }
                    ]
            },
        resolve:
            {
                // root:path.join(__dirname,'src','components')
            }
    };