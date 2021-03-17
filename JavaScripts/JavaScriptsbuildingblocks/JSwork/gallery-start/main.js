const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */


for (var i = 1; i <=5; i++ ) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+ i + '.jpg');
  thumbBar.appendChild(newImage);
}


/* 编写 变暗/变量 按钮功能 */

btn.onclick = function() {
  let btnvalue = btn.textContent;
  if (btnvalue == '变暗') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = '变亮';
  } else if (btnvalue == '变亮') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = '变暗';
  }  
}

const thumbImgs = document.querySelectorAll('.thumb-bar img');
console.log(thumbImgs);

function changeImage(num) {
  return 'images/pic' + num + '.jpg';
}

for (var i = 0; i < thumbImgs.length; i++) {
  thumbImgs[i].onclick = function(e) {
    console.log(e.target.src);
    displayedImage.setAttribute('src', e.target.src);
  }
}