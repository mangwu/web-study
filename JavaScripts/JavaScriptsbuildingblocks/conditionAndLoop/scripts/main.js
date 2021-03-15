// 条件判断语句
const checkbox = document.querySelector('.lizi .outif input[type="checkbox"]');
const paraif = document.querySelector('.lizi .outif p');
console.log(checkbox);

let houseWorkDone = false;

checkbox.addEventListener('change', checkOn)

function checkOn() {
  if (houseWorkDone == false) {
    houseWorkDone = true;
  } else {
    houseWorkDone = false;
  }
  
  updateParaif();
}

function updateParaif() { 
  if (houseWorkDone === true) {
    paraif.textContent = '你做了家务，获得了10块钱';
    paraif.style.background = "rgba(0, 255, 21,0.8)"
  } else {
    paraif.textContent = '你没做家务，身上没钱';
    paraif.style.background = "rgba(255, 81, 81, 0.8)"
  }
}

// 条件判断多次语句

const select = document.querySelector('.lizi .outelseif select');
const paraelseif = document.querySelector('.lizi .outelseif p');
console.log(select);

select.addEventListener('change', setWeather);

function setWeather() {
  let choice = select.value;

  if (choice === 'sunny') {
    paraelseif.textContent = '今天天气很好';
    paraelseif.style.background = "rgb(243, 233, 142)"
  } else if (choice === 'rainy') {
    paraelseif.textContent = '今天是下雨天';
    paraelseif.style.background = "rgba(131, 204, 176, 0.7)";
  } else if (choice === 'snowing') {
    paraelseif.textContent = '今天下雪天，很冷';
    paraelseif.style.background = "rgba(245, 242, 234, 0.9)";
  } else if (choice === 'overcast') {
    paraelseif.textContent = "今天大雾，看不见";
    paraelseif.style.background = "rgb(150, 148, 144)";
    paraelseif.style.opacity = '0.6';
  } else {
    paraelseif.textContent = '';
  }
}
// 使用switch 语句
const select2 = document.querySelector('.lizi .outswitch select');
const paraswitch = document.querySelector('.lizi .outswitch p');
console.log(paraswitch);

select2.addEventListener('change', setWeather2);

function setWeather2() {
  let choice = select2.value;
  console.log(choice)
  switch (choice.toString()) {
    case 'sunny':
      paraswitch.textContent = '今天天气很好';
      paraswitch.style.background = "rgb(243, 233, 142)";
      break;
    case 'rainy':
      paraswitch.textContent = '今天是下雨天';
      paraswitch.style.background = "rgba(131, 204, 176, 0.7)";
      break;
    case 'snowing':
      paraswitch.textContent = '今天下雪天，很冷';
      paraswitch.style.background = "rgba(245, 242, 234, 0.9)";
      break;
    case 'overcast':
      paraswitch.textContent = "今天大雾，看不见";
      paraswitch.style.background = "rgb(150, 148, 144)";
      paraswitch.style.opacity = '0.6';
      break;
    default:
      paraswitch.textContent = '';
    
  }
}

// 三元运算符

var selecttheme = document.querySelector('.lizi .outthree select');
var html = document.querySelector('html');
var header = document.querySelector('header');
var content = document.querySelector('.content');
const nava = document.querySelector('nav a');
const footer = document.querySelector('footer');

function changeTheme(bgColor, textColor) {
  html.style.background = bgColor;
  html.style.color = textColor;
  if (bgColor == 'rgba(0, 0, 0, 0.6)') {
    header.style.background = bgColor;
    header.style.color = 'white';
    header.style.boxShadow = 'none';
    nava.style.color = 'red';
    footer.style.background = 'rgba(0, 0, 0, 0.3)';
    footer.style.color = 'white';
  } else {
    header.style.background = bgColor;
    header.style.color = 'black';
    header.style.boxShadow = '3px 2px 3px #999';
    nava.style.color = 'blue';
    footer.style.background = '#e9e9e9';
    footer.style.color = 'black';
  }
}

selecttheme.onchange = function() {
  (selecttheme.value === 'black') ? changeTheme('rgba(0, 0, 0, 0.6)', 'black') : changeTheme('white', 'black');
}

// 日历

var selectrili = document.querySelector('.lizi .rili select');
var list = document.querySelector('.lizi .rili ul');
var h1 = document.querySelector('.lizi .rili h1');
console.log(selectrili)
selectrili.onchange = function() {
  var choicemonth = selectrili.value;
  console.log(choicemonth)
  // ADD CONDITIONAL HERE
  switch(choicemonth) {
    case 'January':
      days = 31;
      break;
    case 'February':
      days = 28;
      break;
    case 'April':
      days = 30;
      break;
    case 'June':
      days = 30;
      break;
    case 'August':
      days = 30;
      break;
    case 'November':
      days = 30;
      break;
    default:
      days = 31;
  }
  createCalendar(days, choicemonth);
}

function createCalendar(days, choicemonth) {
  list.innerHTML = '';
  h1.textContent = choicemonth;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');


// 画布

var btn = document.querySelector('.lizi .canvasfor button');
var canvas = document.querySelector('.lizi .canvasfor canvas');
var ctx = canvas.getContext('2d');


var WIDTH = document.documentElement.clientWidth/3;
console.log(WIDTH);

var HEIGHT = document.documentElement.clientHeight;
console.log(HEIGHT);

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number) {
  return Math.floor(Math.random()*number);
}

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill()
  }
}
draw()
btn.addEventListener('click', draw);