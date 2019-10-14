const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // builds from this entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'none',
  module:{
    rules:[
            {
                test:/\.scss$/,
                use:[{
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: (resourcePath, context) => {
                      return path.relative(path.dirname(resourcePath), context) + '/';
                    },
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader',
                'sass-loader',
              ],
             },
     ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
  ],
  mode: 'development',
};
