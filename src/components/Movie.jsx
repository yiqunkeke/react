import React from 'react'

// 1. 如果要使用 class 定义组件，必须让自己的组件继承自 React.Component
class Movie extends React.Component {
    // 构造器
    constructor() {
        // 由于 Movie组件，继承了 React.Component 这个父类，所以，自定义的构造器中，必须优先调用 super()
        super()
        // 只有调用了 super()以后，才能使用 this 关键字
        this.state = {
            msg: '大家好，我是 class 创建的Movie组件'
        } // 这个 this.state = {} 就相当于 Vue 中的 data() {return {}}
    }

    // 2. 在组件内部，必须有render函数
    // 【render 函数的作用】：渲染当前组件所对应的 虚拟DOM元素
    render() {
        // 3. render函数中，必须返回合法的 JSX 虚拟DOM结构
        // 4. 在 class 关键字创建的组件中，如果想使用外界传递过来的 props 参数，不需接收，直接【通过 this.props.*** 访问】
        // 注意：在 class 组件内部，this 表示当前组件的实例对象。
        // 注意：无论是 class 还是普通 function 创建的组件，它们的 props 都是只读的，不能被重新赋值
        // this.props.name = 'ls' // Error
        // 在 class 中、this.state 上的数据都是可读可写的
        this.state.msg = 'this.state中的值被修改了'
        return <div>
            这是 class 创建的组件----{this.props.name}---{this.props.age}
            <h3>{this.state.msg}</h3>
        </div>
    }
}

export default Movie

// 【总结：两种创建组件方式的对比】
// 注意：使用 class 关键字创建的组件，有自己的私有数据【this.state】和生命周期函数；----有状态组件【今后用的最多】
//       但是使用 function创建的组件，只有 props，没有自己的私有数据和生命周期函数  ---- 无状态组件【今后用的不多】

// 有状态组件和无状态组件之间的本质区别就是：有无state属性 和 有无生命周期函数

// 如果一个组件需要有自己的私有数据，则推荐使用 class 创建的有状态组件
// 如果一个组件不需要有私有数据，则推荐使用无状态组件
// React 官方说：无状态组件，由于没有自己的state和生命周期，所以运行效率会比有状态组件稍微高

// 【推荐，直接使用 class 有状态组件】

// 【组件中的props 和 state/data 之间的区别】
// props 中的数据都是外界传递过来的。
// state/data 中的数据，都是组件私有的。(通过ajax获取回来的数据，一般都是私有数据)
// props 中的数据都是只读的，不能重新赋值
// state/data 中的数据，都是可读可写