import React from 'react'

// 将上面的子组件抽离为单独的.jsx文件，并导入
import CmtItem from '@/components/CmtItem'

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
            {/* <h1 style="color:red">这是评论列表组件</h1> */}
            {/* Uncaught Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX. */}
            {/* 【注意： 如果在 JSX中，如果想写行内样式了，不能为 style设置字符串的值】
                而应该这么写：【style={{color: 'red'}}】
                在行内样式中，如果是 数值类型的样式，则可以不用引号包裹；如果是字符串类型的样式值，必须使用引号包裹；
            */}
            <h1 style={{color: 'red', fontSize: '35px', zIndex: 1, fontWeight: 200, textAlign: 'center'}}>这是评论列表组件</h1>

            {/* {this.state.CommentList.map(item => <div key={item.id}>
                <h2>评论人：{item.user}</h2>
                <p>评论内容：{item.content}</p>
            </div>)} */}

            {/* 抽离子组件 */}
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}
