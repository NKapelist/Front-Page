const path = require('path');
const webpack = require("webpack");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
        main: path.resolve(__dirname,'src','index.js'),
        
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
    },
    
    stats: {
        children: false,
        chunks: false,
        colors: true,
        depth: false,
        entrypoints: false,
        errors: true,
        errorDetails: true,
        hash: true,
        modules: false,
        maxModules: 15,
        modulesSort: "field",
        performance: true,
        timings: true,
        version: true,
        warnings: true,
    },

    plugins: [
     
        new HtmlWebpackPlugin({template: "./assets/index.template.html"}),

        new SWPrecacheWebpackPlugin({
            cacheId: "font-page-" + Math.random(),
            filename: "service-worker.js",
            staticFileGlobs: ["build/**.*"],
            minify: false,
            stripPrefix: "build/"
        })
    ],
	watch: true,

	module: {
		rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            //  name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
            }
        ]
        
	}
}