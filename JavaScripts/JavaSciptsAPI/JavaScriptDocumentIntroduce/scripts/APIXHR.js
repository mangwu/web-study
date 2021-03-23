// url 资源地址
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// 创建XHR api对象入口
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
// 发送请求
request.send();

// 加载完毕事件
request.onload = function() {
  var data = request.response;
  console.log(data);
  // some code to operate data
}
