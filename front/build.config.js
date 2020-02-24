const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const commonConfig = require("./common.config");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = merge(commonConfig, {
  entry: "./src/index.tsx",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [new CleanWebpackPlugin()]
});
