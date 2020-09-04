// 传统实现面向对象方式  【构造函数】
function Person (name, age) {
    this.name = name
    this.age = age
}

// info 属性，直接挂载给了构造函数，所以它是静态属性
Person.info = 'aaaa' 

// 实例方法
Person.prototype.say = function() {
    console.log('这是 Person 的实例方法')
}

// 静态方法
Person.show = function() {
    console.log('这是 Person 的静态方法')
}

const p1 = new Person('王多多', 18)
console.log(p1)
p1.say() // 这是实例方法
// p1.show() // p1.show is not a function
Person.show()



// ------------- 华丽丽的分割线-------------------------------------
console.log('--------------------------------------------------')


// 创建了一个动物类
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // 在 class 内部，通过 static 修饰的属性，就是【静态属性】 【今后用的也不多】
    static info = "eee"
    
    // 这是 Animal 的实例方法【今后会经常用到实例方法】【***】
    // 就相当于往原型对象上挂载了jiao()方法
    jiao() {
        console.log('这是Animal的实例方法')
    }

    // 这是 Animal 类的静态方法 【今后用的不多】
    static show() {
        console.log('这是Animal的静态方法')
    }
}

const a1 = new Animal('大黄', 3)
console.log(a1) 
a1.jiao() // 这是实例方法
// a1.show() //  a1.show is not a function
Animal.show()


// 【注意点】
//  1、在 class {}内部，只能写 构造器、静态属性、静态方法、实例方法
//  2、class关键字只是在语法层面做了优化，内部还是用原来的配方来实现的。所以说，我们把class关键字称作语法糖。