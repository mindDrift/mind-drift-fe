
const HTMLPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.[hash].js'
  },
  devServer: {
    port: 7890
  },
  plugins: [
    new HTMLPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')()
              ]
            }
          }
        ]
      },
      {
        test: /.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
