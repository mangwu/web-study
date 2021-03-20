const btn = document.querySelector('button');
// work线程
const worker = new Worker('scripts/work.js');

btn.onclick = function(e) {
  let myDate;
  worker.postMessage('Go!');

  // 创建一个p，表明浏览器会在运行上述代码时阻塞
  let para = document.createElement('p');
  para.textContent = '新段落';
  document.body.appendChild(para);
}

worker.onmessage = function(e) {
  console.log(e);
}