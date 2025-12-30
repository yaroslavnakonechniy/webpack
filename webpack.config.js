const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js',

    },
    optimization: {
        splitChunks: {
        chunks: 'all',
        },
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './index.html' }),
        new CleanWebpackPlugin()

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i, // Правило для зображень
                type: 'asset/resource', // Генерує URL та виводить файл у директорію
                generator: {
                    filename: 'assets/images/[name].[hash][ext]', // Шаблон імені файлу для зображень
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/i, // Правило для шрифтів
                type: 'asset/resource', // Генерує URL та виводить файл у директорію
                generator: {
                    filename: 'assets/fonts/[name].[hash][ext]', // Шаблон імені файлу для шрифтів
                }
            },
        ]
    }
}