let myInt = 5;
let myFloat = 1.65;

console.log('myInt type:' + typeof myInt);
console.log('myFloat type:' + typeof myFloat);

console.log(myInt ++);
console.log(++ myInt);

const button = document.querySelector('.lizi .out button');

const para = document.querySelector('.lizi .out p');

button.onclick = function() {
  if(button.textContent === 'Start machine'){
    button.textContent = 'Stop machine';
    para.textContent = 'the machine is working'
  } else {
    button.textContent = 'Start machine';
    para.textContent = 'the machine stop'
  }
}

var x = [0,1,2,3,4,5,6,7,8,9];
var a = [x, x, x, x, x]; 
for (var i = 0, j = 9; i <= j; i++, j--)
  console.log(a[i][j]);

deletex = 42;
let deletey = 43;
var deletez = 43;
var deletearr = [2, 5, 6, 7];

console.log(delete deletex);
console.log(delete deletey);
console.log(delete deletez);
delete deletearr[2];
console.log(deletearr[2]);


var myBike = {make:'lucs', model:'a5', year:2015};
console.log('model' in myBike); // true