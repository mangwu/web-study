// 打印一个空函数的默认原型属性

function doSomething() {
  // nothing to do give a prototype a property
}
doSomething.prototype['foo'] = 'bar';
console.log(doSomething.prototype)

// 创建一个实例化的doSomething()对象：

var doSomeInstancing = new doSomething();
doSomeInstancing.prop = 'somevalue';
console.log(doSomeInstancing);

// 查找prop 和foo
console.log('doSomeInstancing.prop ' + doSomeInstancing.prop); // somevalue
console.log('doSomeInstancing.foo ' + doSomeInstancing.foo); //bar
console.log('doSomething.prop ' + doSomething.prop); //undefined
console.log('doSomething.foo ' + doSomething.foo); //undefined
console.log('doSomething.prototype.prop ' + doSomething.prototype.prop); //undefined
console.log('doSomething.prototype.foo ' + doSomething.prototype.foo); //bar

// 构造函数
// 构造完整类
function Person(first, last, gender, age, intrests) {
  this.name = {
    'first': first,
    'last': last
  };
  this.gender = gender;
  this.age = age;
  this.intrests = intrests;

  // method
  this.bio = function() {
    var pronuce;
    if (this.gender == 'Male' || this.gender == 'male'|| this.gender == 'M' || this.gender == 'm') {
      pronuce = 'He';
    } else {
      pronuce = 'She';
    }
    
    console.log(
      pronuce + ' is ' + this.age + ' years old named ' + this.name['first'] + ' ' + this.name.last +
      '.' + pronuce + ' like ' + this.intrests.toString() + '.'
    );
  };

  this.greeting = function() {
    console.log(
      'Hi! I am' + this.name[first] + ' ' + this.name[last]
    );
  };
};

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}

var person1 = new Person('Bob', 'Smith', 'male', 32, ['music', 'skiing']);
