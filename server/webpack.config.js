const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  entry: "./server.ts",
  output: {
    path: __dirname,
    filename: "serverBuild/server.js",
    publicPath: path.join(__dirname, "servserBuild"),
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts"],
  },

  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
};
