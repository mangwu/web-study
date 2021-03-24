var div = document.querySelector('div');
// 宽度和高度
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

// 静态改变div高宽
/*
  第一次打开的浏览器的宽度和高度会被确定
*/
div.style.width = WIDTH + 'px';
div.style.height = HEIGHT + 'px';

// 随浏览器视口动态变化
window.onresize = function() {
  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;
  div.style.width = WIDTH + 'px';
  div.style.height = HEIGHT + 'px';
}
