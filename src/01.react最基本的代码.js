// 1. 这两个导入的时候，接收的成员名称，必须这么写
import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom' // 把创建好的组件、虚拟DOM 放到页面上展示的


// 2. 创建虚拟DOM元素
// 参数1： 创建的元素的类型，字符串，表示元素的名称
// 参数2：是一个对象或 null,表示当前这个DOM元素的属性、
// 参数3： 子节点（包括其它虚拟DOM 包括文本子节点 ）
// 参数n: 其它子节点 
// <h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>
const myh1 = React.createElement('h1', {
    id: 'myh1',
    title: 'this is a title'
}, '这是一个大大的H1')
// myh1不是一个标签，而是一个js对象。【在 React 中，一切都是以 js 对象来表示的】


// 3. 使用ReactDOM把虚拟DOM渲染到页面上
// 参数1: 要渲染的那个虚拟DOM元素
// 参数2：指定页面上的一个DOM元素，当作容器
// ReactDOM.render(myh1, '#app')
// Target container is not a DOM element  经过分析，猜测：第二个参数接收的应该是一个DOM元素而不是选择器
// 将来这个index.js被webpack打包后，会自动注入到index.html文件中
// 因此，可以使用document.getElementById来获取DOM元素
// ReactDOM.render(myh1, document.getElementById('app'))

// 接下来，使用一个div元素包裹myh1
// const myDiv = React.createElement('div', null, '这是一个div元素', myh1)
// ReactDOM.render(myDiv, document.getElementById('app'))

// 页面上成千上万个DOM，这样做太麻烦
// 渲染页面上的DOM结构，最好的方式，就是写HTML代码
const mytest = <div>aaa</div>
ReactDOM.render(mytest, document.getElementById('app'))
// You may need an appropriate loader to handle this file type，currently no loaders are configured to process this file.