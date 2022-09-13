const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
console.log("------------ env vars ----------", process.env.NODE_ENV, process.env.APP_ENV)

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv({
      path: `./.env.${process.env.APP_ENV ? process.env.APP_ENV : 'development'}`,
    }),
  ],
};
