// 创建组件时，必须引入 React 包，【接收名必须为大写】，否则报错：Uncaught ReferenceError: React is not defined
import React from 'react'

// 创建并导出Hello组件
export default function Hello(props) {
    console.log(props)
    
    return <div>这是一个虚拟DOM---{props.name}---{props.age}---{props.gender}</div>
}

// 把组件暴露出去
// export default Hello