// 浏览器信息
console.log(navigator.appVersion);
console.log(navigator.userAgent);

// 窗口大小
console.log(window.innerWidth);
console.log(window.innerHeight);

// 获得元素引用
var para = document.querySelector('section p');
para.textContent = '修改文本'