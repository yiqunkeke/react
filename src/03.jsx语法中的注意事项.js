
import React from 'react'
import ReactDOM from 'react-dom'

// 【在JSX中书写JS代码】  jsx XML比 HTML严格多了
// 1. 渲染数字
let a = 10
// 2.渲染字符串
let str = '你好，中国'
// 渲染布尔值
let boo = true
// 3.为属性绑定值
let title = 'coo'
// 4.渲染jsx元素
const h1 = <div>红红火火</div>  // 【在React中，一切都是用js来表达的】
// 5.渲染jsx元素数组
const arr = [
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]
// 6.将普通字符串数组，转为 jsx数组并渲染到页面上【两种方案】
const arrStr = ['毛利', '柯南', '小五狼', '灰原哀']  // 把这个4个字符串每个放到一个 h5 标签中，然后渲染到页面上

// 定义一个空数组，将来用来存放名称标签【方案一】
// 【forEach没有返回值】
// 【注意： react中需要把 key 添加给被forEach或map循环直接控制的元素】
const nameArr = []
arrStr.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>
    nameArr.push(temp)
})

// 数组中的 map 方法：有返回值.【map中必须要写return】【方案二】
// 如果循环体中只有一条语句，则 {}和return 可以省略
let result = arrStr.map(item => {
    return item + '~~'
})
console.log(result)


// 总结：什么情况下需要使用 {}呢？当我们需要在JSX控制的区域内，写JS表达式了，则需要把JS代码写到 {}中
ReactDOM.render(<div>
    {a + 2}

    <hr/>

    {str}

    <hr/>

    {boo.toString()}

    <hr/>
    
    <p title={title}>这是一个p标签</p>
    {h1}

    <hr/>
    
    {/* {arr} 推荐这种注释*/}
    { 
        // 这是注释，你看不见我
    }

    <hr/>

    {nameArr}

    <hr/>
    
    {arrStr.map(item => <h3 key={item}>{item}</h3>)}

    <hr/>

    <p className="aaa">!!!</p>
    {/*Warning: Invalid DOM property `class`. Did you mean `className`? */}

    <label htmlFor="a">bbbb</label>

</div>, document.getElementById('app'))

// jsx 语法注意事项：

// 【key】
// Warning: Each child in a list should have a unique "key" prop.
// Vue 和 React 中 key 的作用是完全一样的。

// 【注释】
// 在 jsx 中，使用 {/* */} 进行注释
// 在 js 中，使用 /* */

// 【标签成对，或自闭合】
// 在 jsx 语法中，标签必须成对出现，如果是单标签，则必须自闭合

// 【className】用来代替 class 属性。用【htmlFor】代替 label标签中的 for属性
// 因为 class 在 js 中属于关键字，所以在 jsx 中使用 class 会有歧义，使用 className来代替class属性即可。

// map和className会经常用到。

// 【唯一根节点】
// 在jsx创建DOM的时候，所有的节点，必须有唯一的根元素进行包裹。