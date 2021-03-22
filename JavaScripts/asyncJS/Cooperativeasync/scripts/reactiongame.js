const resultStart = document.querySelector('.game .result');
const arrow = document.querySelector('.game .arrow');

// 隐藏箭头
arrow.style.visibility = 'hidden';

// 初始化旋转参数
var rotateCount = 0;
var startTime = null;
var rAF;

function arrowStart(timestamp) {
  // 初始化时间
  if (!startTime) {
    startTime = timestamp;
  }
  // 运行时间
  var currentTime = timestamp - startTime;
  // 旋转角度
  rotateCount = currentTime/3;

  // 修改角度
  if (rotateCount > 359) {
    rotateCount = rotateCount % 360;
  }
    

  // 开始旋转
  arrow.style.transform = 'rotate(' + rotateCount + 'deg)';
  rAF = requestAnimationFrame(arrowStart);
} 

// 随机数函数
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + Math.floor(min);
}
var isOver = false;
var isStart = false;
// 开始游戏事件
resultStart.addEventListener('click', gameStart)

function gameStart() {
  // 设置可见
  arrow.style.visibility = 'unset';
  arrowStart();
  resultStart.style.visibility = 'hidden';
  // 持续时间
  var rotateTime = random(3, 7);
  console.log(rotateTime);
  setTimeout(()=>{
    // 暂停旋转
    cancelAnimationFrame(rAF);
    // 设置结果可见
    arrow.style.visibility = 'hidden';
    resultStart.style.visibility = 'unset';
    resultStart.textContent = 'press keyboard!';
    resultStart.removeEventListener('click', gameStart);

    // 键盘判断 游戏结束
    
    document.addEventListener('keydown', function keyHandler(e) {
      // 键盘判断
      if (!isOver) {
        if (e.key === 'a' || e.key === 'A') {
          resultStart.textContent = 'player1 win!'
          resultStart.style.fontWeight = 'bold';
          setTimeout(reset, 3000);
          isOver = true;
        } else if (e.key === 'l' || e.key === 'L') {
          resultStart.textContent = 'player2 win!'
          resultStart.style.fontWeight = 'bold';
          setTimeout(reset, 3000);
          isOver = true;
        }
      }
    });
    
    
  }, rotateTime * 1000);
}

// 重启游戏
function reset() {
  resultStart.addEventListener('click', gameStart);
  resultStart.textContent = 'gameStart';
  isOver = false;
}