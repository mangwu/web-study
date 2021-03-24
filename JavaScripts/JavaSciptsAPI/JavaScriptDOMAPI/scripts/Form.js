// 元素引用
var ulelem = document.querySelector('.form ul');
var inputelem = document.querySelector('.form input');

var btnelem = document.querySelector('.form button');

// 响应函数
function addItem() {
  if (inputelem.value !== '') {
    var item = inputelem.value;
    // 创建元素
    var lielem = document.createElement('li');
    var btnDelete = document.createElement('button');

    lielem.textContent = item;
    btnDelete.textContent = '删除';
    
    console.log(lielem);
    // 添加元素
    lielem.appendChild(btnDelete);
    ulelem.appendChild(lielem);
    // 添加删除响应函数
    btnDelete.onclick = function() {
      lielem.parentNode.removeChild(lielem);
    }
    // 输入框为空
    inputelem.value = '';
    inputelem.focus();
  } else {
    alert('输入框为空');
  }
  
}

btnelem.addEventListener('click', addItem);


