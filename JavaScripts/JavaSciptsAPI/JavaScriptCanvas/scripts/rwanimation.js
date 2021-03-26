// 获取元素引用
let myCanvas = document.querySelector('.myCanvas');

// 设置长宽
let width = myCanvas.width = window.innerWidth;
let height = myCanvas.height = window.innerHeight;

// 获取画布上下文
var ctx = myCanvas.getContext('2d');

// 背景
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

// 设置画布原点
ctx.translate(width/2, height/2);
