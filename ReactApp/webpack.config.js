var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/javascripts/');
var APP_DIR = path.resolve(__dirname, 'reactapp/index.js');


var config = {
   entry: APP_DIR,
   

   output: {
      path: BUILD_DIR,
      filename: 'app.js',
   },


   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         	
         }
      ]
   },
   
}

module.exports = config;
