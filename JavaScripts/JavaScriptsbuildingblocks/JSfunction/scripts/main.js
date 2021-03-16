const btn = document.querySelector('body button')
// 弹出窗口
function displayMessage(msgText, msgType) {
  const html = document.querySelector('html');
  
  // 一个用于展示信息框的面板盒子
  const panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  // 将信息板添加为html的子元素
  html.appendChild(panel);

  // 为信息盒子添加子元素p
  const msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  // 为信息盒子添加一个关闭按钮
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'X';
  panel.appendChild(closeBtn);

  // 判断信息框类型
  if (msgType == 'warning') {
    msg.style.backgroundImage = 'url(images/警告.svg)';
    panel.style.backgroundColor = 'rgba(248, 200, 200, 0.7)';
  } else if (msgType == 'chat') {
    msg.style.backgroundImage = 'url(images/聊天.svg)';
    panel.style.backgroundColor = 'rgba(197, 231, 220, 0.7)';
  } else {
    msg.style.backgroundImage = 'url(images/提示.svg)';
    panel.style.backgroundColor = 'rgba(197, 200, 250, 0.7)';
  }

  // 点击事件 删除信息盒子元素
  closeBtn.onclick = function() {
    btn.removeAttribute('disabled');
    btn.style.cursor = 'pointer';
    console.log(btn);
    panel.parentNode.removeChild(panel);
  }
}


btn.onclick = function() {
  displayMessage('JS 传递的信息 ');
  btn.setAttribute('disabled','true');
  btn.style.cursor = 'not-allowed';
}

