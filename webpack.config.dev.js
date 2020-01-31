const ExtractPlugin = require("extract-css-chunks-webpack-plugin");
module.exports = {
	devServer: {
		historyApiFallback: true,
		public: process.env.REVERSE_PROXY_HOST
	},
	mode: "development",
	module: {
		rules: [
			{
				loader: [
					{
						loader: "cache-loader",
						options: {
							cacheDirectory: "cache-loader"
						}
					},
					"awesome-typescript-loader"
				],
				test: /\.tsx?$/
			},
			{
				test: /\.(css|pcss)$/,
				use: [
					"style-loader",
					"css-modules-typescript-loader",
					{
						loader: "css-loader",
						options: {
							import: true,
							importLoaders: 2,
							localsConvention: "camelCaseOnly",
							modules: {
								localIdentName: "[name]-[local]-[hash:base64:5]"
							},
							sourceMap: true
						}
					},
					"postcss-loader"
				]
			}
		]
	},
	plugins: [
		new ExtractPlugin({
			filename: "[name].css"
		})
	]
};