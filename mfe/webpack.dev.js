const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  entry: {
    dev: "./playground/index.jsx",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "MFE playground",
      chunks: ["dev"],
    }),
    new ModuleFederationPlugin({
      shared: {
        react: { eager: true },
      },
    }),
  ],
  devServer: {
    port: 3000,
    static: "./dist",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
