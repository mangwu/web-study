// 插入一个div块，用来显示动画
var divelem = document.createElement('div');
document.body.appendChild(divelem);
divelem.textContent = '↻ ';

// 初始化一些变量
var ratateCount = 0; //旋转度数
let rAF; //requestAniamtionFrame()的返回值
let startTime = null; //初始时间
var i = 0;

//  draw() 函数
function draw(timestamp) {
  // 初始时间
  if (!startTime) {
    startTime = timestamp;
    console.log(timestamp);
  }
  // 运行时间
  var currentTime = timestamp - startTime;
  
  //  记录每秒钟旋转器设置的旋转角度
  if (i%60 == 0) {
    console.log((currentTime/5) % 360);
  }
  i++;
  
  // 一个循环旋转度数：
  ratateCount = (timestamp - startTime) / 3;
  

  // 检查度数在0-359之间
  if (ratateCount > 359) {
    ratateCount %= 360;
  }
  // console.log(ratateCount);
  
  // 旋转器
  divelem.style.transform = 'rotate(' + ratateCount + 'deg)';
  
  // 动画运行
  rAF = requestAnimationFrame(draw);
}

draw();

flag = true;

const btnCancel = document.createElement('button');
// divelem.appendChild(btnCancel);
btnCancel.textContent = '停止/开始旋转';
document.body.appendChild(btnCancel);

btnCancel.addEventListener('click', function() {
  if (flag) {
    cancelAnimationFrame(rAF);
    flag = false;
  } else {
    draw();
    flag = true;
  }
  
})



