const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const miniCss = require('mini-css-extract-plugin');module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
   },
   mode: 'development',
   module: {
      rules: [
         {
            test:/\.(s*)css$/,
            use: [ miniCss.loader, 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
               loader: 'file-loader',
               options: {
                  name: '[path][name][ext]',
               }
            }]
         },
      ],
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
      new HtmlWebpackPlugin({
         template: 'index.html',
       }),
   ]
};