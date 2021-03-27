// 元素引用
// 视频媒体
var media = document.querySelector('video');
// 控件
var controls = document.querySelector('.controls');

// 控件按钮
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');
var rwd = document.querySelector('.rwd');
var fwd = document.querySelector('.fwd');

// 计时器
var timerWrapper = document.querySelector('.timer');
var timer = document.querySelector('.timer span');
var timerBar = document.querySelector('.timer div');

// 移除默认控件
media.removeAttribute('controls');

// 使自定义控件可见
controls.style.visibility = 'visible';

// 

media.onmouseleave = function() {
  controls.style.opacity = '0';
}
controls.onmouseover = function() {
  controls.style.opacity = '1';
}
media.onmouseover = function() {
  controls.style.opacity = '1';
}
controls.style.opacity = '1';
// 暂停和播放视频
play.addEventListener('click', playPauseMedia);

function playPauseMedia() {
  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
  if (media.paused) {
    play.setAttribute('data-icon', 'u');
    media.play();
  } else {
    play.setAttribute('data-icon', 'P');
    media.pause();
  }
}
var intervalFwd;
var intervalRwd;
// 视频终止
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

function stopMedia() {
  // 暂停视频 让视频时间从头开始 设置播放按钮图标为已暂停图标
  media.pause()
  media.currentTime = 0;
  play.setAttribute('data-icon', 'P');
  // 终止快进或快退
  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
}

// 视频快进和快退
rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

// 快进函数和快退函数
/*
 * 如果只是简单的将当前时间向前或向后调
 * 那么点击一次快进或快退一次即可
*/
// function mediaBackward() {
//   if (media.currentTime <= 3) {
//     media.currentTime = 0;
//   } else {
//     media.currentTime -= 3;
//   }
// }
// function mediaForward() {
//   if (media.currentTime >= media.duration - 3) {
//     stopMedia();
//   } else {
//     media.currentTime += 3;
//   }
// }
/*
* 为了实现点击一次后连续快进或快退
* 需要使用setInterval()函数，记录按钮的状态
*/

// setInterval的返回值，用于结束setInterval()函数


function mediaBackward() {
  // 按下快退按钮就结束快进功能，如果不这样做，同时点击按住这两个按钮会使得播放器暂停
  clearInterval(intervalFwd)
  // 如果长按快进移动到了快退，应该使快进按钮的active状态移除
  fwd.classList.remove('active');

  // 快退按钮在被点击按住后，添加active属性
  if (rwd.classList.contains('active')) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    media.play();
    play.setAttribute('data-icon', 'u');
  } else {
    rwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windBackward, 200);
  }
}

function windBackward() {
  if (media.currentTime <= 3) {
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    stopMedia();
  } else {
    media.currentTime -= 3;
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');

  if (fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
    play.setAttribute('data-icon', 'u');
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalRwd = setInterval(windForward, 200);
  }
}

function windForward() {
  if (media.currentTime >= media.duration - 3) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

// 更新时间
// timeupdate事件
media.addEventListener('timeupdate', setTime);

function setTime() {
  // 当前时间
  var minutes = Math.floor(media.currentTime / 60);
  var seconds = Math.floor(media.currentTime - minutes * 60);
  // 时间字符
  var minuteValue;
  var secondValue;

  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }
  // span值
  var mediaTime = minuteValue + ":" + secondValue;
  timer.textContent = mediaTime;
  // 进度条
  var barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
  timerBar.style.width = barLength + 'px';
}

// 进度条的拖动
timerWrapper.addEventListener('click', moveTimerBar);

function moveTimerBar(e) {
  var pos = timerWrapper.getBoundingClientRect();
  console.log(pos);
  console.log(e.x);

  // 距离
  var len = e.x - pos.left;

  media.removeEventListener('timeupdate', setTime);
  // 设置进度条
  setTimeBar(len);
  // 设置显示时间
  setTimer(len);

  media.addEventListener('timeupdate', setTime);


}

function setTimeBar(len) {
  var barLength = len;
  timerBar.style.width = barLength + 'px';
}

function setTimer(len) {
  // 秒时间
  var seconds = Math.floor(len / timerWrapper.clientWidth * media.duration);
  media.currentTime = seconds;
  console.log(media.currentTime);
}

function setTimeC(len) {

}


