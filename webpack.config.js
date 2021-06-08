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
                //问题:为什么点需要转意\.
                // 答案：1：由于.匹配除换行符以外的任意字符，
                // 2：/内容/，其中//表示之间的内容为正则表达式
                // 3./\.css$/表示匹配所有以css为结尾的文件
                use:['style-loader','css-loader'],
            },
            {
                test:/\.less$/,
                //问题:为什么点需要转意\.
                // 答案：1：由于.匹配除换行符以外的任意字符，
                // 2：/内容/，其中//表示之间的内容为正则表达式
                // 3./\.css$/表示匹配所有以css为结尾的文件
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
