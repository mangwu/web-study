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

// 弧度转换
function degToRad(deg) {
  return deg / 180 * Math.PI;
}
// 随机数
function random(min, max) {
  return Math.floor((max - min) * Math.random()) + Math.floor(min); 
}

// 循环迭代
/*
  loops :迭代次数
*/
function rotateGraph(loop, moveOffset) {
  var loops = loop || 250;
  var moveOffsets = moveOffset || 20;

  for (var i = 0; i < loops; i++) {
    ctx.fillStyle = 'rgba(' + (255 - loops) + ', 50, ' + (255 - loops) + ', 0.9)';
    ctx.beginPath();
    ctx.moveTo(moveOffsets, moveOffsets);
    ctx.lineTo(moveOffsets+loops, moveOffsets);
    var triHeight = moveOffsets/2 * Math.tan(degToRad(60));
    ctx.lineTo(moveOffsets+(loops/2), moveOffsets+triHeight);
    ctx.lineTo(moveOffsets - (loops/2), moveOffsets + triHeight);
    ctx.lineTo(moveOffsets, moveOffsets);
    ctx.fill();

    loops--;
    moveOffsets += 0.7;
    ctx.rotate(degToRad(5));
  }
}
rotateGraph(240, 50);