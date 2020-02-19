const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./common.config");
const merge = require("webpack-merge");

module.exports = merge(commonConfig, {
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist/")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    port: 51268,
    hot: true,
    historyApiFallback: true
  }
});
