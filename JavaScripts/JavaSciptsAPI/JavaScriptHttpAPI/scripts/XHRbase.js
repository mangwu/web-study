const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

// 为select添加响应事件方法
verseChoose.onchange = function() {
  // 获取选中的选项值
  var verse = verseChoose.value;

  // 更换显示的诗句
  updatePoem(verse);
}

// 更新诗词
function updatePoem(verse) {
  // 空选项
  if (verse == '---') {
    poemDisplay.textContent = '';
  } else {
    // url
  var verseURL = 'poem/' + verse + '.txt'
  console.log(verseURL);

  // 创建请求对象
  let request = new XMLHttpRequest();
  // 为请求对象指定需要从网络请求资源的方法和地址(url)
  request.open('GET', verseURL);
  // 期待的响应类型
  request.responseText = 'text';
  // 响应返回时接受数据
  request.onload = function() {
    poemDisplay.textContent = request.response;
  };

  // 以上为请求设置

  // 发送请求
  request.send();
  }
  
} 