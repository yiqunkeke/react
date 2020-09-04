// 父类 【大家可以直接把父类，理解成原型对象 prototype】
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // 打招呼的 实例方法
    sayHello() {
        console.log('大家好')
    }
}

// 这是子类  美国人
// 【在 class 类中，可以使用 extends 关键字实现子类继承父类】
// 语法： class 子类 extends 父类 {}
class American extends People {
    // this hasn't been initialised - super() hasn't been called
    constructor(name, age) {
        // 问题1：为什么一定要在constructor中调用super()？
        //  答案：【语法规范】因为如果一个子类，通过 extends 关键字继承了父类，且自已定义了constructor，那么，在子类的 constructor 中必须优先调用一下 super()
        // 问题2：super()是个什么东西？
        //  答案： super() 是一个函数。而且，它是父类的构造器。【子类中的 super，其实就是父类中 constructor 构造器的一个引用】。
        // 问题3：为什么调用了 super() 之后，a1 实例的 name 和 age 都变在了 undefined?
        //  答案：因为 super() 是父类构造器的引用。而在constructor 中调用 super() 时，并没有传递 name 和 age，所以两者都是 undefined。
        //  解决办法：把 name 和 age 传递给super()中
        // super()
        super(name, age)
    }
    
}
const a1 = new American('Tom', 20)
console.log(a1)
a1.sayHello()

// 这是子类 中国人
class Chinese extends People {
    // IDNumber 身份证号--中国人独有--不适合挂在父类上
    constructor(name, age, IDNumber) {
        super(name, age)
        // 【在子类中， this 只能放到 super() 之后使用】
        // 【换句话说，super() 必须在子类的constructor的第一行】
        this.IDNumber = IDNumber
    }
}
const c1 = new Chinese('zs', 22, '410523xxxxxxxxxxxx')
console.log(c1)
c1.sayHello()

// 【总结】：父类上所有的实例属性和实例方法都可以被子类的实例访问到。

