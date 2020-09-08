import React from 'react'

// 第一层封装： 将样式对象 和 UI 结构分离
// const itemStyle = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}
// const userStyle = {fontSize: '14px'}
// const contentStyle = {fontSize: '12px'}

// 第二层封装: 合并成一个大的样式对象
// const styles = {
//     item: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'},
//     user: {fontSize: '14px'},
//     content: {fontSize: '12px'}
// }

// 第三层封装：抽成单独的js文件，导出这个对象
import styles from '@/components/styles'

// 使用 function 构造函数，定义普通的无状态组件
export default function CmtItem (item) {
    return <div style={styles.item}>
    <h2 style={styles.user}>评论人：{item.user}</h2>
    <p style={styles.content}>评论内容：{item.content}</p>
</div>
}