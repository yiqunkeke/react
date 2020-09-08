import React from 'react'

// 使用 function 构造函数，定义普通的无状态组件
export default function CmtItem (item) {
    return <div>
    <h2>评论人：{item.user}</h2>
    <p>评论内容：{item.content}</p>
</div>
}