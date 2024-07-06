const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    "vanilla-app": "./vanilla-app/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfrontends",
      filename: "remoteEntry.js",
      exposes: {
        ".": "./react-fm/ReactFM.jsx",
      },
      shared: {
        react: { eager: true },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
