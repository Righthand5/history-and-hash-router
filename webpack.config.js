const  HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry:"./src/index.js", //入口
    mode:'development',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
        }
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
