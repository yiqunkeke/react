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

            {/* 函数传参 */}
            {/* 需求：点击按钮，修改msg的值 */}
            <button onClick={() => this.show('☺')}>按钮</button>

            <h3>{this.state.msg}</h3>

            {/* 如果我们只是为文本框的 value 属性，绑定到了 state 状态，但是，如果不提供 onChange 处理函数的话，
                得到的文本框将只是一个只读的。
            */}
            {/* <input type="text" style={{width: '100%'}} value={this.state.msg}/> */}
            {/* You provided a `value` prop to a form field without an `onChange` handler. 
                This will render a read-only field. 
                If the field should be mutable use `defaultValue`. 
                Otherwise, set either `onChange` or `readOnly`. */}

            {/* 当为文本框 绑定 value值以后，要么同时提供一个 readOnly ，要么提供一个 onChange 处理函数*/}
            {/* <input type="text" style={{width: '100%'}} value={this.state.msg} readOnly/>    */}
             {/*文本框变成只读  */}
            
             <input type="text" style={{width: '100%'}} value={this.state.msg} onChange={(e) => this.txtChange(e)} ref='txt'/>
        </div>
    }
   
    // 每当文本框的内容变化了，必然会调用这个 txtChange
    txtChange(e) {
        // console.log('变化了')

        // 【重点：】
        // 默认情况下，在 React中，如果页面上的表单元素，绑定了 state 上的状态值，
        // 那么，每当 state上的状态值变化，必然会自动把最新的状态值，自动同步到页面上
        // 状态变化 ---> 自动更新页面 【单向数据流】

        // 如果界面上文本框的内容变化了，想要把最新的值，同步回state中去，此时，【React中没有自动同步机制】。
        // 1.在 React 中，需要程序员手动监听文本框的 onChange事件，
        // 2.在onChange事件中，拿到最新的文本框的值，
        // 3.程序员调用 this.setState({})手动把最新的值同步到state中。

        // 在　onChange 事件中，获取文本框的值 ，有2种方案：

        // 方案1： 通过事件参数 e 来获取；
        // console.log(e.target.value)

        // this.setState({
        //     msg: e.target.value
        // })

        // 方案2：Vue 中 ref， this.$refs.xxx。
        // 在 React 中，也有 ref，使用 this.refs.xxx
        // console.log(this.refs.txt)
        // console.log(this.refs.txt.value)
        this.setState({
            msg: this.refs.txt.value
        })
    }

    show = (arg1) => {
        this.setState({
            msg: '123'
        },function(){
            console.log(this.state)
        })
    }
}
