const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
         enforce: 'pre',
         test: /\.(js)$/,
         exclude: /node_modules/,
         use: 'eslint-loader'
       },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' }
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/${PATHS.assets}img`,
          to: `${PATHS.dist}/${PATHS.assets}img`
        },
        {
          from: `${PATHS.src}/static`,
          to: ''
        }
      ]
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      minify: { collapseWhitespace: true }
    })
  ]
};
