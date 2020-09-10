import React from 'react'
import ReactDOM from 'react-dom'

// 使用 function 构造函数，定义普通的无状态组件
// function CmtItem (item) {
//     return <div>
//     <h2>评论人：{item.user}</h2>
//     <p>评论内容：{item.content}</p>
// </div>
// }


// 使用 class关键字，定义父组件
// class CmtList extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             // 评论列表数据
//             CommentList: [
//                 {
//                     id: 1,
//                     user: '张三',
//                     content: '哈哈'
//                 },
//                 {
//                     id: 2,
//                     user: '李四',
//                     content: '呵呵'
//                 },
//                 {
//                     id: 3,
//                     user: '王五',
//                     content: '嘿嘿'
//                 },
//                 {
//                     id: 4,
//                     user: '刘杰',
//                     content: '妈妈妈妈'
//                 },
//                 {
//                     id: 5,
//                     user: '长相',
//                     content: 'ahaa=aa'
//                 }
//             ]
//         }
//     }

//     render(){
//         return <div>
//             <h1>这是评论列表组件</h1>
//             {/* {this.state.CommentList.map(item => <div key={item.id}>
//                 <h2>评论人：{item.user}</h2>
//                 <p>评论内容：{item.content}</p>
//             </div>)} */}

//             {/* 抽离子组件 */}
//             {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
//         </div>
//     }
// }

// import CmtList from '@/components/CmtList'
import CmtList from '@/components/CmtList2'  // 使用 CSS样式表美化组件--demo

ReactDOM.render(<div>
    <CmtList></CmtList>
</div>, document.getElementById('app'))

