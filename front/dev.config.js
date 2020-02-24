const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./common.config");
const merge = require("webpack-merge");

module.exports = merge(commonConfig, {
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
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
});
