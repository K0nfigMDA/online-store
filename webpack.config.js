const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use:  [
                  {
                    loader: 'html-loader',
                    options: { minimize: false },
                  }
                ]
            },
						{
							test: /\.(sa|sc|c)ss$/,
							use: [
								{loader: MiniCssExtractPlugin.loader}, 
								{loader: 'css-loader'}, 
								{loader: "postcss-loader"},
								{
									// First we transform SASS to standard CSS
									loader: "sass-loader",
									options: {
										implementation: require("sass")
									}
								}
							],
						},
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset/resource",
            },
						{
							// Apply rule for fonts files
							test: /\.(woff|woff2|ttf|otf|eot)$/,
							use: [
										 {
											 // Using file-loader too
											 loader: "file-loader",
											 options: {
												 outputPath: 'fonts'
											 }
										 }
									 ]
						},
						{
							test: /\.mp3$/,
							use: [
											 {
												 // Using file-loader for these files
												 loader: "file-loader",
					
												 // In options we can set different things like format
												 // and directory to save
												 options: {
													 outputPath: 'sound',
													 publicPath: 'sound'
												 }
											 }
										 ]
						},
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: './index.html',
            inject: 'body'
        }),
				new MiniCssExtractPlugin({
					filename: '[name].css',
					chunkFilename: '[id].css',
				}),
        new CleanWebpackPlugin(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
