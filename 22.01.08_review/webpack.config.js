const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        index : "./src/statics/js/index.js",
    },
    output :{
        filename : "[name].js",
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    mode : "development",
    watch : true,
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:[["@babel/preset-env",{targets:"defaults"}]],
                        compact: false,
                    }
                }
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "index",
            hash: true,
            filename:"[name].html",
            chunks:["index"],
            template: './src/templates/index.html'
        }),
    ],
}