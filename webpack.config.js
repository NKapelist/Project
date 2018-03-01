const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
        main: path.resolve(__dirname,'src','index.js'),
        
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build')
    },
    
    resolve: {
        extensions: [ ".js", ".json", ".vue", ".scss" ],
        alias: {
            vue: "vue/dist/vue.min",
            fonts: path.join(__dirname, "assets", "fonts")
        }
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        disableHostCheck: true,
        port: 8080,
        open: true,
        hot: true,
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
        new webpack.HotModuleReplacementPlugin(),

        new CopyWebpackPlugin([
              { from: './assets/img/*.*', to: './build'}
            ]),
        new HtmlWebpackPlugin({template: "./index.html"})
    ],
	// watch: true,

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
                test: /\.vue$/, 
                use: [
                    {loader: "vue-loader"}
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