// 元素引用
let myCanvas = document.querySelector('.myCanvas');
var ctx = myCanvas.getContext('2d');

// 视口宽度
var width = myCanvas.width = window.innerWidth;
console.log(window.innerHeight);
var height = myCanvas.height = window.innerHeight;

// window.onresize = function() {
//   width = myCanvas.width = window.innerWidth;
//   height = myCanvas.height = window.innerHeight;
// }
// 初步使用
// 设置画布样式
ctx.fillStyle = 'rgb(0, 0, 0)';
// 填充矩形
ctx.fillRect(0, 0, width, height);


// 红色矩形
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 150);
// 绿色矩形
ctx.fillStyle = 'green';
ctx.fillRect(100, 100, 150, 125);

// 半透明矩形
ctx.fillStyle = 'rgba(125, 54, 254, 0.5)';
ctx.fillRect(25, 75, 300, 50);

// 描边矩形
ctx.strokeStyle = 'rgb(230, 250, 220)';
ctx.lineWidth = 5;
ctx.strokeRect(25, 50, 300, 175);

// 绘制路径并填充
ctx.fillStyle = 'rgb(125, 250, 150)';
ctx.beginPath();
ctx.moveTo(300, 500);
ctx.lineTo(300, 700);
ctx.lineTo(100, 700);
ctx.lineTo(200, 500);
ctx.lineTo(50, 400);
ctx.lineTo(300, 500);

ctx.fill()

// 绘制路径并描边
ctx.strokeStyle = 'rgba(50, 147, 210, 0.9)';
ctx.lineWidth = 7;
ctx.beginPath();
ctx.moveTo(700, 200);
ctx.lineTo(900, 400);
ctx.lineTo(700, 600);
ctx.lineTo(500, 400);
ctx.stroke();

// 画等边三角形
// 角度弧度转换
function degToRad(deg) {
  return deg * Math.PI / 180;
}

ctx.fillStyle = 'rgb(147, 125, 240)';
ctx.beginPath();
ctx.moveTo(200, 200);
// 等边三家形的高
var triHeight = 100 * Math.tan(degToRad(60));
ctx.lineTo(300, 200 + triHeight);
ctx.lineTo(100, 200 + triHeight);
ctx.lineTo(200, 200);
// 填充
ctx.fill();

// 画圆
ctx.strokeStyle = 'rgba(240, 180, 200)';
ctx.beginPath();
ctx.lineWidth = 2;
ctx.arc(650, 350, 80, degToRad(-120), degToRad(30), true);
ctx.stroke();


// 画实心圆
ctx.fillStyle = 'rgba(120, 250, 200)';
ctx.beginPath(); 
ctx.arc(650, 400, 80, degToRad(-30), degToRad(30), true);
ctx.lineTo(650, 400);
ctx.fill();

// 绘制文本
ctx.fillStyle = 'rgb(250, 240, 120)';
ctx.font = '40px "微软雅黑", sans-serif';
ctx.fillText('Canvas Text', 500, 500);

// 绘制空心文本
ctx.strokeStyle = 'rgb(240, 199, 240)';
ctx.font = '55px "微软雅黑", sans-serif';
ctx.lineWidth = 1;
ctx.strokeText('Canvas Text', 400, 600);

// 绘制图像
var image = new Image();
image.src = '../../src/images/65123727_3.webp';
image.onload = function() {
  ctx.drawImage(image, 900, 200);
}

// 绘制裁剪图像
var image2 = new Image();
image2.src = '../../src/images/65123727_3.webp';
image2.onload = function() {
  ctx.drawImage(image2, 40, 20, 150, 150, 800, 40, 200, 200);
}





