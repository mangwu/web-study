// Create needed constants 创建需要的元素引用
const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// 初始化数据库
let db;

// 加载note的事件

window.onload = function() {
  // 打开数据库一版本，数据库名为notes
  // notes数据表不存在就在后续代码中创建它
  // 1代表数据库版本
  let request = window.indexedDB.open('notes', 1);
  // 读取数据库失败
  request.onerror = function() {
    console.log('Database fail to open');
  };

  // 读取数据库成功
  request.onsuccess = function() {
    console.log('Database opened successfully');
    // 存储数据库结果
    db = request.result;
    // 处理展示数据
    displayData();
  }
  // 设置数据库。没有设置数据库或者使用比现有更大版本号打开数据库
  // 则对数据库进行创建或更新
  request.onupgradeneeded = function(e) {
    //  数据库引用， e.target就是指触发事件的request本身
    // 使用let定义的是一个局部域db，此事件在onsuccess前发生，需要单独操作
    let db = e.target.result;

    //使用IDBDatabase中的方法创建数据对象(数据表)
    // 第一个参数为数据表名，第二个参数为存储的数据对象
    // 其中默认指定了一个关键字id作为主键
    let objectStore = db.createObjectStore('notes', {keyPath: 'id', autoIncrement: true}); 

    // 使用创造索引方法创造另外两个索引
    objectStore.createIndex('title', 'title', {unique: false});
    objectStore.createIndex('body', 'body', {unique: false});
    /*
    数据表记录对象:
    {
      title: "some description",
      title: "Need some description",
      id: 8
    }
    */

    console.log(objectStore);
    console.log('数据表建立完成');
  }
};

// 自定义表单提交的方法
form.onsubmit = addData;
// 在数据库中添加记录
function addData(e) {
  // 阻止表单提交的默认行为
  e.preventDefault();
  // 捕获表单中的值，创建数据
  let newItem = {
    title: titleInput.value,
    body: bodyInput.value
  };
  // 打开数据库中指定数据表的引用,需要指定读取数据表的方法读和写
  let transaction = db.transaction(['notes'], 'readwrite');
  // 调用objectStore方法读取数据表
  let objectStore = transaction.objectStore('notes');
  // 添加新数据的请求
  let request = objectStore.add(newItem);
  request.onsuccess = function() {
    // 成功添加就清除文本框中的用户输入
    titleInput.value = '';
    bodyInput.value = '';
  };
  // 数据表引用修改成功就显示数据
  transaction.oncomplete = function() {
    console.log('Transaction completed: database modification finished.');
    // 更新页面
    displayData();
  };
  transaction.onerror = function() {
    // 未成功打开数据库引用
    console.log('Transaction not opened due to error');
  };
}

// 显示数据
function displayData() {
  // 清空所有列表项
  // 如果不这样，每次更新都会添加大量重复内容
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  // 打开数据库，并且读取指定数据表引用
  let objectStore = db.transaction('notes').objectStore('notes');
  // 获得游标引用
  // 这是一个可用于迭代对象存储中的记录的构造
  objectStore.openCursor().onsuccess = function(e) {
    // 获取数据表引用
    let curor = e.target.result;
    // 修改列表
    if (curor) {
      // 创建元素
      let listItem = document.createElement('li');
      let h3 = document.createElement('h3');
      let para = document.createElement('p');

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);
      // 修改文本
      h3.textContent = curor.value.title;
      para.textContent = curor.value.body;

      // 为每篇notes添加id属性描述
      listItem.setAttribute('data-note-id', curor.value.id);

      // 创造删除按钮
      let deleteBtn = document.createElement('button');
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = '删除';
      // 删除事件
      deleteBtn.onclick = deleteItem;

      // 光标前进到下一个数据存储区域记录
      curor.continue();
    } else {
      // 列表项为空，显示没有notes指示
      if (!list.firstChild) {
        let listItem = document.createElement('li');
        listItem.textContent = 'No notes stored.';
        list.appendChild(listItem);
      }
      console.log('Notes all displayed');
    }
  };
}

// 删除记录
function deleteItem(e) {
  // 获取删除note的id
  let noteId =  Number(e.target.parentNode.getAttribute('data-note-id'));

  // 打开数据库表
  let transaction = db.transaction(['notes'], 'readwrite');
  let objectStore = transaction.objectStore('notes');
  // 根据id删除数据表中的note
  let request = objectStore.delete(noteId);

  // 数据删除成功后对展示数据的删除
  transaction.oncomplete = function() {
    // 删除父元素节点
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log('删除成功');
    // 如果全部删除（list为空)，显示无note提示信息
    if (!list.firstChild) {
      let listItem = document.createElement('li');
      listItem.textContent = '没有笔记';
      list.appendChild(listItem);
    }
  };
}