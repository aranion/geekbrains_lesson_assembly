const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    server: path.join(__dirname, "src/server/server.js"),
  },
  output: {
    path: path.join(__dirname, "dist/server"),
    publicPath: "/",
    filename: "[name].js",
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [],
  },
  plugins: [],
};
