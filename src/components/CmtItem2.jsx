import React from 'react'

import cssObj from '@/css/cmtItem.scss' 
console.log(cssObj)

// 使用 function 构造函数，定义普通的无状态组件
export default function CmtItem (item) {
    return <div className={cssObj.cmtBox}>
    <h1 className={cssObj.title}>评论人：{item.user}</h1>
    <p className={cssObj.content}>评论内容：{item.content}</p>
</div>
}