const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/script.js',
  devtool: "inline-source-map",
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
	clean: true,
  },
  plugins: [
	new HtmlWebpackPlugin({
		template: "./src/index.html",
	}),
	new MiniCssExtractPlugin({
		filename: "style.css",
	}),
  ],
  module: {
	  rules: [
		  {
			  test: /\.css$/i,
			  use: [MiniCssExtractPlugin.loader, 'css-loader']
		  },
	  ],
  },
  optimization: {
	  minimizer: [
		new TerserPlugin({
			extractComments: false,
		}),
		new CssMinimizerPlugin({
			test: /\.css$/i,
			minimizerOptions: {
				preset: [
					"default",
					{
						discardComments: { removeAll: true },
					},
				],
			},
		}),
	  ],
  },
};