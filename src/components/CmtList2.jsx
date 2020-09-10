import React from 'react'

// 导入列表组件需要的样式表
// 问题： 这个样式表，是只在 List 组件中生效吗？
// 经过实验，发现，【直接导入的 css 样式表，默认是在全局上，整个项目都生效。】 【样式表 无 组件内作用域的概念】

// 思考： Vue 组件中的样式表，有没有冲突的问题？
//  答案：Vue 组件中的样式表，也有冲突的问题。但是，可以使用 <style scoped></style> scoped 指令解决。
// 疑问：React 中有没有类似于 scoped 这样的指令呢？
//  答案： 没有。因为【在 React 中，根本就没有指令的概念】。
import cssObj from '@/css/cmtList.scss'
console.log(cssObj) // {} 空对象

// 如果在引用某个包的时候，这个包被安装到了 node_modules 目录中，
// 则，可以省略 node_modules 这一层目录，直接以包名开始引入自己的 模块 或 样式表

// import bootcss from 'bootstrap/dist/css/bootstrap.css'
// console.log(bootcss)  

// 由于我们在 webpack中启用了 CSS样式表 的modules模块化，所以第三方中的样式，也被模块化了。
// 不再是 btn btn-primary 这样的类名
// 所以不能 直接使用 <button className="btn btn-primary">按钮</button>
// 思考：第三方模块，不使用模块化。

// 【自己规定：第三方的样式表，都是以 .css 结尾】，这样，我们不要为普通的 .css 启用模块化。
// 自己的样式表：都要以 .scss 或 .less 结尾，只为 .scss 或 .less 文件启用模块化
// 如果 .css 文件不启用模块化，那么在引入的时候，可以直接 import 'xxx.css'，不再需要定义接收名
import 'bootstrap/dist/css/bootstrap.css'

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
            {/* <h1 className="title">这是评论列表组件</h1> */}
            {/* <h1 className={cssObj.title}>这是评论列表组件</h1> */}

            {/* 使用多个类 ，其中 test 类被 :global() 包裹，并没有被模块化*/}
            {/* <h1 className={cssObj.title + ' test'}>这是评论列表组件</h1> */}
            <h1 className={[cssObj.title, 'test'].join(' ')}>这是评论列表组件</h1>
            
            <button className="btn btn-primary">按钮1</button>
            {/* <button className={bootcss.btn}>按钮</button> */}
            {/* <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮2</button> */}
            

            {/* 抽离子组件 */}
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}

// 【总结： css 模块化】
// 1. 先在 webpack 配置文件中，为 css-loader 加上 modules参数，代表启用模块化
// 2. 之后，在导入样式表时，就可以 import cssObj from 'xxx.css' 来接收一个 cssObj 对象了
// 3. 直接使用 cssObj.类名  方式【点语法】使用类和id
