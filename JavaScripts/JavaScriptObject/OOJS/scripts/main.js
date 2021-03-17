// 普通函数构建类
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('hi! I am ' + this.name + '.');
  };
  return obj;
}

// 用普通函数创建一个实例对象

var salva = createNewPerson('salva');
console.log(salva.name);
salva.greeting();

// 通过构建函数定义一个类
function Personsmall(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I am ' + this.name + '.');
  }
}

// 通过构建函数创建一个实例对象
var bob = new Personsmall('bob');
console.log(bob.name);
bob.greeting();

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

var alice = new Person('alice', 'smith', 'female', 25, ['music', 'sporting']);
alice.bio();