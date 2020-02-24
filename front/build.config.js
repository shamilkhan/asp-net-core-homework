const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const commonConfig = require("./common.config");
const merge = require("webpack-merge");

module.exports = merge(commonConfig, {
  entry: "./src/module.tsx",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
});
