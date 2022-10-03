const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require("dotenv-webpack");

module.exports = (_, argv) => {
  const isProd = argv["mode"] === "production";
  return {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
      filename: "bundle.[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        isProd
          ? {
              test: /\.(css|s[ac]ss)$/i,
              use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
              ],
            }
          : {
              test: /\.(css|s[ac]ss)$/i,
              use: ["style-loader", "css-loader", "postcss-loader"],
            },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      ...(isProd
        ? [
            new MiniCssExtractPlugin({
              filename: "[name].[contenthash].css",
            }),
          ]
        : []),
      new Dotenv({}),
    ],
  };
};
