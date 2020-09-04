import React from 'react'
import ReactDOM from 'react-dom'

// 导入Hello组件
// 【默认，如果不做单独的配置的话，不能省略 .jsx 后缀名】
// import Hello from './components/Hello'      // 如果导入组件时，不写后缀名会报错：Uncaught Error: Cannot find module './components/Hello'
// import Hello from './components/Hello.jsx'  // 导入组件是，写了后缀名，报错：Uncaught ReferenceError: React is not defined。解决方法：在组件内部引入 React
// import Hello from './components/Hello' // 在 webpack.config.js 中，配置了 resolve.extensions 之后，便可以省略 .jsx 后缀名，且不再报错
import Hello from '@/components/Hello'  // 如果想使用 @ 代表 项目根目录的 src 这一层路径，需要在 webpack配置文件中，配置 resolve.alias

const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

ReactDOM.render(<div>
    123
    <Hello {...dog}></Hello>
</div>, document.getElementById('app'))

