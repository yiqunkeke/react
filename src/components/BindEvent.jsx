// 【在React中，绑定事件的标准格式 以及 使用 this.setState({}) 修改私有数据】
import React from 'react'

export default class BindEvent extends React.Component {
    constructor() {
        super()
        // 私有数据
        this.state = {
            msg: '哈哈',
            name: 'zs',
            age: 22,
            gender: '男'
        }
    }

    render() {
        return <div>
            这是BindEvent 组件
            <hr/>
            {/* 传统绑定事件 小写*/}
            {/* Invalid event handler property `onclick`. Did you mean `onClick`? */}
            {/* <button onclick=''>按钮</button> */}

            {/* 在React 中，有一套自己的事件绑定机制 ，事件名是【小驼峰命名】*/}
            {/* <button onClick="">按钮</button>  */}
            {/* Expected `onClick` listener to be a function, instead got a value of `string` type. */}

            {/* <button onClick={function(){console.log('ok')}}>按钮</button> */}
            {/* 为事件提供处理函数，必须是如下格式 */}
            {/* onClick={function} */}

            {/* <button onClick={myclickHandler}>按钮</button> */}
            {/* ReferenceError: myclickHandler is not defined */}

            {/* <button onClick={this.myclickHandler}>按钮</button> */}
            {/* 在组件内，使用自己的实例方法，要使用 this.xxx 调用。 */}
            {/* 【注意：不要在方法名后面加()】 */}

            {/* 注意：onClick 只接受 function作为处理函数 */}
            {/* 注意：箭头函数本身就是一个匿名的 function 函数 */}
            {/* <button onClick={() => { this.myclickHandler() }}>按钮</button> */}
            {/* 当箭头函数中只有一行代码时，可以省略 {} */}

            {/* 函数传参 */}
            {/* 需求：点击按钮，修改msg的值 */}
            <button onClick={() => this.show('☺')}>按钮</button>

            <h3>{this.state.msg}</h3>

        </div>
    }

    // 这是一个实例方法
    myclickHandler = () => {
        console.log(2222)
    }

    show = (arg1) => {
        console.log('show方法被调用了'+ arg1)

        // 【注意】，在React中，如果想为state中的数据，重新赋值，不要使用 this.state.xxx=xxx
        // 应该调用 React 提供的 this.setState({ msg: '123'})
        // this.state.msg = '嘻嘻'
        // console.log(this.state)
        // 数据变了，界面没变

        // 在React 中，推荐使用 this.setState({}) 修改状态值
        this.setState({
            // 【注意1】在 setState 中，只会把 对应的 state 状态更新，不会覆盖其他的状态
            msg: '西西'
        })
        // 【注意2】setState方法是异步的
        // 如果大家在调用完this.setState({}) 之后，又想立即拿到最新的 state值，【需要使用 this.setState({},callback)】
        console.log(this.state)  // 数据没变！

        this.setState({
            msg: '123'
        },function(){
            console.log(this.state)
        })
    }
}