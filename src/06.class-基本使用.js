// 传统实现面向对象方式  【构造函数】
function Person (name, age) {
    this.name = name
    this.age = age
}

// info 属性，直接挂载给了构造函数，所以它是静态属性
Person.info = 'aaaa' // info属性并没有通过 this 被挂载到 new 出来的实例对象上。只能通过 [构造函数.info] 访问到. info 是静态属性。

const p1 = new Person('王多多', 18)

console.log(p1)
// 通过 new 出来的实例，访问到的属性，叫做 【实例属性】
console.log(p1.name)
console.log(p1.age)
console.log(p1.info) // undefined 
console.log(Person.info)

// 【静态属性】：通过构造函数，直接访问到的属性，叫做静态属性


// ------------- 华丽丽的分割线-------------------------------------
console.log('--------------------------------------------------')


// ES6 中 class 关键字，是实现面向对象编程的新形式
// 创建了一个动物类
class Animal {
    // 这是类中的构造器
    // 每一个类中都有一个构造器。如果我们程序员没有手动指定构造器，那么可以认为类内部有个隐形的、看不见的 空构造器，类似于 construction(){}
    // 构造器的作用：每当 new 这个类的时候，必然会优先执行 构造器中的代码
    constructor(name, age) {
        // 实例属性【在构造器内部，通过this分配的属性，也是实例属性】
        // 构造器中的参数，被当作实例属性，被挂载到每个new出来的实例上了
        this.name = name
        this.age = age
    }

    // 在 class 内部，通过 static 修饰的属性，就是【静态属性】
    static info = "eee"
}

const a1 = new Animal('大黄', 3)
console.log(a1)
console.log(a1.name) // 实例属性
console.log(a1.age)  // 实例属性
console.log(a1.info) // undefined
console.log(Animal.info) // info 是 Animal 的静态属性
