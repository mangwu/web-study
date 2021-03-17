// 构造函数类
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.bio = function() {
  let string = this.name['first'] + ' ' + this.name['last'] + ' is ' + this.age + ' years old. ';
  // 判断性别
  let pronoun;
  if (this.gender == 'male' || this.gender == 'M' || this.gender == 'm' || this.gender == 'Male') {
    pronoun = 'He';
  } else {
    pronoun = 'She';
  }
  string += pronoun + ' likes ';

  // 兴趣
  if (this.interests.length == 1) {
    string += this.interests[0] + '.';
  } else {
    for (var i = 0; i < this.interests.length; i++) {
      if (i == this.interests.length - 1) {
        string = string.slice(0, string.length - 2);
        string += ' and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }
  alert(string);
}

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
}

var person1 = new Person('Bob', 'Smith', 25, 'male', ['sporting', 'music']);

person1.bio();

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

// 设置原型 继承Person中的方法 构造器改变
Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype);

// 更正构造器
Teacher.prototype.constructor = Teacher;
console.log(Teacher.prototype);

// 覆写方法
Teacher.prototype.greeting = function() {
  var prefix;

  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Mrs.';
  } else {
    prefix = 'Mx.';
  }

  alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};

var teacher1 = new Teacher('smia', 'asnc', 35, 'm', ['asx', 'music', 'skiing'], 'math');

teacher1.bio()
teacher1.greeting();


// 学生类
function Student(first, last, age, gender, interests, grade) {
  Person.call(this, first, last, age, gender, interests);

  this.grade = grade;

}

// 继承方法
Student.prototype = Object.create(Person.prototype);

// 更正构造器
Student.prototype.constructor = Student;

// 覆写方法
Student.prototype.greeting = function() {
  alert('Hello. My name is ' + this.name.last + ', and I am in Grade ' + this.grade + '.');
}

var student1 = new Student('asc', 'ascaew', 15, 'female', ['kkias','ascas','ascxas','cccc'], '9');

student1.greeting();
student1.bio();