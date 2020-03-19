const webpack = require("webpack");
module.exports = {
	entry: "./src/index.tsx",
	plugins: [
		new webpack.ProvidePlugin({
			preact: "preact"
		})
	]
};