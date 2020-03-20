const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
	module: {
		rules: [
			{
				enforce: "pre",
				exclude: /node_modules/,
				test: /\.(ts|tsx|js)$/,
				use: [
					{
						loader: "eslint-loader",
						options: {}
					}
				]
			},
			{
				loader: "url-loader",
				test: /\.svg$/
			},
			{
				loader: "file-loader",
				test: /\.(jpe?g|png|gif|ttf|woff|eot|mp3)$/i
			}
		]
	},
	output: {
		filename: "bundle.min.js",
		path: path.join(__dirname, "../../dist"),
		publicPath: ""
	},
	plugins: [
		new webpack.EnvironmentPlugin({
		}),
		new HtmlWebpackPlugin({
			favicon: "./src/logo.svg",
			template: "./src/index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "../../src/")
		},
		extensions: [".ts", ".tsx", ".js"]
	}
};