// 展示图片 blob为可获取的url，这是回调函数，因为图片只能在加载好后才能使用
function dispalyImage(blob) {
  // 获取图片地址
  let objectUrl = URL.createObjectURL(blob);

  // 创建并添加图片
  let ima = document.createElement('img');
  ima.setAttribute('src', objectUrl);
  document.body.appendChild(ima);
}

// XML 获取图片地址,在获取图片资源时使用上面的回调函数，实现异步
function loadAsset(url, type, callback){
  let xhr = new XMLHttpRequest();
  // 打开连接，加载图片
  xhr.open('GET', url);
  xhr.responseType = type;
  
  // 回调函数，不能立即展示图片
  xhr.onload = function() {
    callback(xhr.response);
  }

  // 发送请求
  xhr.send();
}

loadAsset('blob:https://mdn.github.io/73e21e6b-b82d-44f8-b44f-020f07568b45', 'blob', dispalyImage);