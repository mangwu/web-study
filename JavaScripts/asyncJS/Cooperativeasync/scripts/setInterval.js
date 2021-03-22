var para = document.createElement('p');
document.body.appendChild(para);

// 显示时间
function displayTime() {
  var date = new Date();
  let time = date.toLocaleTimeString();
  para.textContent = time;
  
}

// 时钟
var createClock = setInterval(displayTime, 1000);

// 书写暂停的按钮

const btn = document.createElement('button');
document.body.appendChild(btn);
btn.textContent = '停止/启动'
var flag = true;
btn.addEventListener('click', function() {
  if (flag) {
    clearInterval(createClock);
    console.log('停止时间');
    flag = false;
  } else if (!flag) {
    createClock = setInterval(displayTime, 1000);
    flag = true;
  }
  
})
