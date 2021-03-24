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

  //使用fetch实现http请求
  fetch(verseURL).then((response)=>{
    response.text().then((text)=>{
      poemDisplay.textContent = text;
    })
  })
  }
  
} 