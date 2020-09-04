import React from 'react'
import ReactDOM from 'react-dom'

// import '@/06.class-基本使用'
// import '@/07.class-实例方法和静态方法'
// import '@/08.class-继承'

// 导入组件
import Movie from '@/components/Movie'

const user = {
    name: 'zs',
    age: 22
}

ReactDOM.render(<div>
    123
    {/* 这里的 Movie标签，其实就是 Movie类的一个实例对象 */}
    {/* <Movie name={user.name} age={user.age}></Movie> */}
    <Movie {...user}></Movie>
</div>, document.getElementById('app'))

