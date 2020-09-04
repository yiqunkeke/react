import React from 'react'
import ReactDOM from 'react-dom'

// 回顾：vue 中创建组件：先导入-->注册--->再把组件以标签形式丢到页面上

// 第一种创建组件的方式
// 【一个普通的构造函数，就是一个组件】【组件的名称首字母一定要大写，否则浏览器报错】
// Warning: The tag <hello> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
function Hello(props) {
    // 如果在一个组件中 return null，则表示此组件是空的，什么都不会渲染
    // return null
    // 【在组件中，必须返回一个合法的jsx虚拟DOM元素】

    // props.name = 'zs'
    // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    console.log(props)
    // 结论：不论是Vue还是React，组件中的 props永远都是只读的，不能被重新赋值

    
return <div>这是一个虚拟DOM---{props.name}---{props.age}---{props.gender}</div>
}


const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

ReactDOM.render(<div>
    123

    {/* 直接把组件的名称，以标签形式，丢到页面上即可 */}
    {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello> */}
    <Hello {...dog}></Hello>
</div>, document.getElementById('app'))
// Uncaught Error: Hello(...): Nothing was returned from render. 
// This usually means a return statement is missing. Or, to render nothing, return null.


// 【展开运算符...】

var o2 = {
    age: 22,
    address: '中国北京',
    phone: '139303'
}

var o1 = {
    name: 'zs'
}

// 把o2的属性都复制一份给o1
// [做法一]
// o1 = {
//     name: 'zs',
//     age: o2.age,
//     address: o2.address,
//     phone: o2.phone
// }
// [做法二]
o1 = {
    name: 'zs',
    ...o2
}
console.log(o1)
