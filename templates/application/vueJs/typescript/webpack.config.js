const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
