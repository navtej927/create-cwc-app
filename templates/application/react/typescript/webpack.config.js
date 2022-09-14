const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

console.log(
    '------------ env vars ----------',
    process.env.NODE_ENV,
    process.env.APP_ENV
);

module.exports = (_, argv) => {
    const isProd = argv['mode'] === 'production';
    console.log('isProd', isProd);

    const _plugins = [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new Dotenv({
            path: `./.env.${
                process.env.APP_ENV ? process.env.APP_ENV : 'development'
            }`,
        }),
    ];

    const _rules = [
        {
            test: /\.(tsx)$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ];

    if (isProd) {
        // Only add in production
        _rules.push({
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        });

        _plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            })
        );
    } else {
        _rules.push({
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                    },
                },
            ],
        });
    }

    return {
        entry: './src/index.tsx',
        devtool: 'inline-source-map',
        module: {
            rules: [..._rules],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [..._plugins],
    };
};
