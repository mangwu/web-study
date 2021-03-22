// 创建时间显示段 开始 暂停 清零按钮
const p = document.createElement('p');
p.textContent = '00:00:00';
document.body.appendChild(p);

const btnStart = document.createElement('button');
btnStart.textContent = 'start';
document.body.appendChild(btnStart);
btnStart.style.display = 'inline-block';
btnStart.style.padding = '0.5em 1em';
btnStart.style.marginRight = '1em'; 

const btnStop = document.createElement('button');
btnStop.textContent = 'Stop';
document.body.appendChild(btnStop);
btnStop.style.display = 'inline-block';
btnStop.style.padding = '0.5em 1em';
btnStop.style.marginRight = '1em'; 
btnStop.disabled = 'true';

const btnReset = document.createElement('button');
btnReset.textContent = 'Reset';
document.body.appendChild(btnReset);
btnReset.style.display = 'inline-block';
btnReset.style.padding = '0.5em 1em';
btnReset.style.marginRight = '1em'; 

// 初始化时间变量
var seconds = 0;
var minutes = 0;
var hours = 0;

var list = [hours, minutes, seconds]
// 秒时分转化函数
function toCorrectFormat(list) {
  if (list[2] >= 60) {
    list[2] = 0;
    list[1] += 1;
  }
  if (list[1] >= 60) {
    list[1] = 0;
    list[0] += 1;
  }
}

// toCorrectFormat(list);
console.log(list);

// 打印显示函数

function printClockList() {
  var pSecond = list[2].toString();
  var pMinute = list[1].toString();
  var pHour = list[0].toString();
  var plist = [pHour, pMinute, pSecond];
  for(let i = 0; i < plist.length; i++) {
    if (plist[i].length < 2) {
      plist[i] = '0' + plist[i];
    }
  }
  p.textContent = plist.join(':');
}

// printClockList();
var flag = false;
// 开始计时
function startClock() {
  list[2] += 1;
  console.log(list);
  toCorrectFormat(list);
  printClockList();
}

// var startClockI = setInterval(startClock, 1000);
var btnstartClock;
function btnStartClock() {
  btnstartClock = setInterval(startClock, 1000);
  btnStart.disabled = 'true';
  btnStop.removeAttribute('disabled');
  flag = true;
}

btnStart.addEventListener('click', btnStartClock);


// 暂停计时
btnStop.onclick = function() {
  clearInterval(btnstartClock);
  btnStop.disabled = 'true';
  flag = false;
  btnStart.removeAttribute('disabled');
}

// 重置计算时

function resetClock() {
  // 先暂停计时
  if (flag) {
    clearInterval(btnstartClock);
    flag = false;
  }
  btnStart.removeAttribute('disabled');
  btnStop.disabled = 'true';
  // 重置时间
  for (var i = 0; i < list.length; i++) {
    list[i] = 0;
  }
  printClockList(list);
}

btnReset.addEventListener('click', resetClock);




