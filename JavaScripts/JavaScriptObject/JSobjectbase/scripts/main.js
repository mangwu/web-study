// 定义一个对象
var aObject = {};

console.log(typeof aObject);

// 丰富对象细节

var person = {
  // 属性（变量）
  name: ['bob', 'Smith'],
  age: 25,
  gender: 'male',
  interests: ['skiing', 'music'],
  // 子对象；创造一个子命名空间
  relative: {
    mom: 'Alice',
    dad: 'Jack',
    son: 'Geo',
    greeting: function() {
      console.log('I am ' + person.name[0])
    }
  },

  // 方法(函数)
  getInfo : function() {
    alert(
      this.name[0] + ' ' + this.name[1] + ' is a ' + this.age + ' years old ' + this.gender + '.' +
      ' He like ' + this.interests[0] + ' and ' + this.interests[1]
    )
  },

  greeting: function() {
    alert('Hi, I am ' + this.name[1] +'. What about you?')
  }
};

console.log(person);
// 句点访问
person.getInfo();
person.greeting();
// 链式访问
console.log('dad: ' + person.relative.dad);
person.relative.greeting();

// 括号访问
console.log(person['relative']['dad']);
var personInfo = person['getInfo'];
// console.log(personInfo);

// 设置对象成员
person['relative']['daughter'] = 'Lily';
console.log(person.relative.daughter);

person.myRelativ = function() {
  console.log('I have a son named ' + this.relative.son + ' and I have a daughter named ' + this.relative.daughter);
  this.relative.greeting();
};

person.myRelativ();

// 括号访问法动态添加新成员名称
var dataName = ['height', 1.8];
person[dataName[0]] = dataName[1];

console.log(person.height);
