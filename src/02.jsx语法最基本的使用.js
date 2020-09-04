// 1、导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2、创建虚拟DOM元素
// 回顾：什么是虚拟DOM？ 用 JS对象的形式，来表示DOM和DOM之间的嵌套关系
// const mydiv = React.createElement('div', {
//     id: 'mydiv',
//     title: 'div aaa'
// }, '这是一个div元素')

// 在React中通过JS api来创建DOM元素的方式，太麻烦。

// HTML是最优秀的标记语言。想通过标记的方式直接写DOM元素
// 注意：在 JS文件中，默认不能写这种 类似于 HTML 的标记；否则打包会失败。
// 可以使用 babel 来转换这些 JS中的标签；
// 大家注意：这种在JS中混合写入类似于 HTML的语法，叫做JSX语法。符合XML规范的JS；
// 注意： JSX语法的本质，是在运行的时候，被babel转换成了 React.createElement形式来执行的；【注意不是直接把div标签丢到页面上去显示的】
const mydiv = <div id="mydiv" title="div aaa">
    这是一个div元素
    <h1>这是一个大大的H1</h1>
</div>
// 报错：You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
// 因为这种写法，并不符合js文件的语法规范。
// 这个文件是 js文件，而上面写的 HTML语言中的标记
// 也就是说用JSX创建的HTML标签无法渲染到页面上。


// 3、调用render函数渲染
ReactDOM.render(mydiv, document.getElementById('app'))

// 【配置babel】:
// 安装包：cnpm i @babel/core babel-loader @babel/plugin-transform-runtime @babel/preset-env @babel/preset-stage-0 @babel/preset-react -D
// 1.需要去webpack配置文件中添加babel-loader【千万不要忘记exclude排除项】。
// 2.同时添加babel配置文件【在项目根目录创建.babelrc文件】。
// 在babel配置文件中，把安装的三个preset，一个plugin分别写进 presets 和 plugins选项中。
