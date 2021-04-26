const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: path.join(__dirname, "./index.js"),
  output: {
    path: path.join(__dirname, "dist/public"),
    publicPath: "/",
    filename: "js/[name].js",
  },
  target: "web",
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      excludeChunks: ["server"],
    }),
    new CopyPlugin([
      {
        from: "./src/sound/",
        to: "sound/[name].[ext]",
        toType: "template",
      },
    ]),
  ],
};
