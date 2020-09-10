const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 9000,
        open: true,
        hot: true
    },
    // 在 webpack 4.x 中，有一个很大的特性，就是【约定大于配置】  约定，默认的打包入口路径是 src-->index.js
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html', //生成的内存中首页的名称 
        template:'src/index.html' // 源文件
    })],
    module: {
        // 所有第三方模块的配置规则
        // webpack默认只能打包处理.js后缀名类型的文件，像 .png .vue无法主动处理，所以需要第三方的loader
        // 为什么 index.js 文件是以 .js后缀，也需要配置loader呢？因为在 index.js中有 const mydiv = <div id="mydiv" title="div aaa">这是一个div元素</div>
        // 这样一行代码是webpack处理不了的。
        // 只要webpack对于处理不了的，它都会第一时间来找第三方的loader
        rules: [
            // rules 是一个数组。记性技巧：【带s的复数，通常是数组】[不带s的，是对象]
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/ // 【千万别忘记添加exclude排除项】，否则项目跑不起来
            },
            // 大家可以在 css-loader之后，通过 ? 追加参数，
            // 其中有个固定的参数，叫做 modules ，表示为普通的 CSS 样式表，启用模块化
            // CSS样式表模块化的表现：在 import cssObj from '@/css/cmtList.css' 时， cssObj就不再是空对象了，而变成一个有具体属性的对象
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader?modules']  // 打包处理 CSS 样式表的第三方loader
                use: [
                    'style-loader', 
                    'css-loader'
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         // modules: true,  // modules 是 布尔值
                            
                    //         // modules: 'local', // 'global'  modules 是 字符串 // Using `local` value has same effect like using `modules: true`
                    //         // modules 是对象，可以配置选项参数
                    //         modules: {
                    //             mode: 'local',
                    //             localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    //         }
                    //     },
                    //     // exclude: /node_modules/ // 要想第三方模块的样式 不被模块化，使用 exclude选项是不行的。
                    //     // 因为使用 exclude 把 node_modules目录排除之后，webpack 在遇到 node_modules中的样式表时，就不会做处理了，就会编译失败
                    // }
                ]
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/,
                use: 'url-loader' // 打包处理 字体文件 的 loader 
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'local',
                                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                                }
                            },
                        },
                'sass-loader'] // 打包处理 .scss 文件的loader
            }
        ]
    },
    resolve: {
        // 默认只有 .js 和 .json; 如果想要在引入jsx组件时省略后缀名，则需要配置如下，添加上 .jsx
        extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名，可以省略不写。【顺序很重要，从前到后依次】
        alias: { // alias 表示别名
            '@': path.join(__dirname, './src') // 这样，在这个项目中， @ 就表示项目根目录中 src 的这一层路径
        }
    }
}