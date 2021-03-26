// 元素引用
var canvas = document.querySelector('.myCanvas');
var ctx = canvas.getContext('2d');

var output = document.querySelector('.output');
var colorPicker = document.querySelector('input[type="color"]');
var penSize = document.querySelector('input[type="range"]');
var btnClear = document.querySelector('button');
console.log(output);

// 使用函数，弧度转换
function degToRad(deg) {
  return deg / 180 * Math.PI;
}
// 更新画笔大小
penSize.oninput = function() {
  output.textContent = penSize.value;
}

// 画布初始化
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight - 100;

ctx.fillStyle = 'black';
ctx.fillRect(0,0,width,height);

// 跟踪鼠标位置和鼠标点击状态
var curX;
var curY;
var pressed = false;

// 鼠标移动时实时更新鼠标位置
document.onmousemove = function(e) {
  if (window.Event) {
    curX = e.pageX
  } else {
    // 兼容问题
    if (document.documentElement.scrollLeft) {
      curX = e.clientX + document.documentElement.scrollLeft;
    } else {
      curX = e.clientX + document.body.scrollLeft;
    }
  }
  
  if (window.Event) {
    curY = e.pageY
  } else {
    // 兼容问题
    if (document.documentElement.scrollTop) {
      curX = e.clientX + document.documentElement.scrollTop;
    } else {
      curX = e.clientX + document.body.scrollTop;
    }
  }
  // console.log(curX + ' ' + curY);
}

// 鼠标点击时记录点击按压松开状态
// 因为在画布中作画，故而只需记录画布中的鼠标点击和松开状态
canvas.onmousedown = function() {
  pressed = true;
  console.log(pressed);
}
canvas.onmouseup = function() {
  pressed = false;
}

// 作画函数
function draw() {
  // 如果鼠标点击状态为真就画一个圆，圆的颜色和半径在选择器中选择
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    console.log(colorPicker.value);
    ctx.beginPath();
    // 
    /*
      画布的原点x坐标和鼠标位置的原点x坐标相同
      画布的原点y坐标在鼠标位置的原点y坐标的下方，因为画布上方有工具栏，左上角y坐标下移了 
    */
    ctx.arc(curX, curY-100, penSize.value, degToRad(0), degToRad(360), false);
    ctx.fill();
  }
  requestAnimationFrame(draw);
}

draw();

// 清空函数
function clearCanvas() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);
}

btnClear.addEventListener('click', clearCanvas);