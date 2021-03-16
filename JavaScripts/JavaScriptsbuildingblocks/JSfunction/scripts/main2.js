// 数字
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

// 平方
function squared(num) {
  return num * num;
}

// 立方
function cubed(num) {
  return num * num * num;
}

// 阶乘
function factorial(num) {
  var x = num;
  while (x > 1) {
    num *= x-1;
    x--;
  }
  return num;
}

input.onchange = function() {
  var num = input.value;
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '.';

                       
  }
}