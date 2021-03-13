var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
const button = document.querySelector('.lizi .buttondiv button');


button.onclick = function() {
  let name = prompt('你如何称呼？');
  alert('Hello' + name + ',很高兴遇见你');
}

/* 测试变量 */
let myVariable1;
var myVariable2;

myVariable2 = 'value';

/* var 与 let的不同 */
myVariable3 = 'value2';

function logName() {
  console.log(myVariable3);
}

logName();

var myVariable3;