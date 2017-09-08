const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devtool: "source-map",
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        loader:'babel-loader',
        test: /\.jsx?/,
        include: path.resolve(__dirname, 'src')
      }, {
        test: /\.html$/,
        loader: "raw-loader" // loaders: ['raw-loader']，這個方式也是可以被接受的。
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  devServer:{
    port:3035,
    publicPath: "/",
    contentBase:'./src',
    inline:true,
  },
  resolve: {
    extensions: ['.js', 'index.js', '.jsx', 'index.jsx'],
    modules: ['node_modules'], // 指定套件的路徑
  },
  plugins:[
    HTMLWebpackPluginConfig,
  ]
}
