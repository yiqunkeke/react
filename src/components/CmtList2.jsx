import React from 'react'

import cssObj from '@/css/cmtList.css'

// 将上面的子组件抽离为单独的.jsx文件，并导入
import CmtItem from '@/components/CmtItem2'

// 使用 class关键字，定义父组件
export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            // 评论列表数据
            CommentList: [
                {
                    id: 1,
                    user: '张三',
                    content: '哈哈'
                },
                {
                    id: 2,
                    user: '李四',
                    content: '呵呵'
                },
                {
                    id: 3,
                    user: '王五',
                    content: '嘿嘿'
                },
                {
                    id: 4,
                    user: '刘杰',
                    content: '妈妈妈妈'
                },
                {
                    id: 5,
                    user: '长相',
                    content: 'ahaa=aa'
                }
            ]
        }
    }

    render(){
        return <div>
            <h1 className="title">这是评论列表组件</h1>
            
            {/* 抽离子组件 */}
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}
