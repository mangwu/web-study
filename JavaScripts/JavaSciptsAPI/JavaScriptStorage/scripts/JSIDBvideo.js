// Create needed constants 创建需要的元素引用
const list = document.querySelector('ul');

// 视频名称
const videos = [
  { 'name' : 'crystal' },
  { 'name' : 'elf' },
  { 'name' : 'frog' },
  { 'name' : 'monster' },
  { 'name' : 'pig' },
  { 'name' : 'rabbit' }
];

// 初始化数据库
let db;

// 加载note的事件

window.onload = function() {
  // 打开数据库一版本，数据库名为videos
  // videos数据表不存在就在后续代码中创建它
  // 1代表数据库版本
  let request = window.indexedDB.open('videos', 1);
  // 读取数据库失败
  request.onerror = function() {
    console.log('Database fail to open');
  };

  // 读取数据库成功
  request.onsuccess = function() {
    console.log('Database opened successfully');
    // 存储数据库结果
    db = request.result;
    init();
    
    // // 处理展示数据
    // displayData();
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
    let objectStore = db.createObjectStore('videos', {keyPath: 'name'}); 

    // 使用创造索引方法创造另外两个索引
    objectStore.createIndex('webm', 'webm', {unique: false});
    objectStore.createIndex('mp4', 'mp4', {unique: false});

    /*
    数据表记录对象:
    {
      name: "some description",
      webm: "Need some description",
      mp4:""
      id: 8
    }
    */

    console.log(objectStore);
    console.log('数据表建立完成');
  }
};

// 初始化IDB
function init() {
  // 遍历视频
  for (let i = 0; i < videos.length; i++) {
    // 打开数据库
    let objectStore = db.transaction('videos').objectStore('videos');
    // 获取视频流
    let request = objectStore.get(videos[i].name);
    request.onsuccess = function() {
      // 成功打开数据就展示视频，否则从网络上加载视频
      if (request.result) {
        console.log('taking video from IDB');
        displayVideo(request.result.mp4, request.result.webm, request.result.name);
      } else {
        // 获取视频
        fetchVideoFromNetwork(videos[i]);
      }
    }
  }
}

// 从网络获取视频的方法
function fetchVideoFromNetwork(url) {
  // fetch数据
  let mp4Blob = fetch('videos/' + url.name + '.mp4').then(response => 
    response.blob()
  );
  let webmBlob = fetch('videos/' + url.name + '.webm').then(response =>
    response.blob()
  );
  // 两个promises都有回应时运行
  Promise.all([mp4Blob, webmBlob]).then(function(values){
    // 展示视频
    displayVideo(values[0], values[1], url.name);
    // 存储视频
    storeVideo(values[0], values[1], url.name);
  })

}

// 存储视频数据
function storeVideo(mp4Blob, webmBlob, name) {
  // 打开数据库表
  let objectStore = db.transaction(['videos'], 'readwrite').objectStore('videos');
  // 创建记录
  let record = {
    webm: webmBlob,
    mp4: mp4Blob,
    name: name
  }
  // 存储数据
  let request = objectStore.add(record);

  request.onsuccess = function() {
    console.log('存储数据完成');
  }
  request.onerror = function() {
    console.log(request.error);
  }
}

// 展示视频
function displayVideo(mp4Blob, webmBlob, name) {
  // 创建url
  let mp4Url = URL.createObjectURL(mp4Blob);
  let webmUrl = URL.createObjectURL(webmBlob);

  // 创建元素
  let videoLi = document.createElement('li');
  let videodiv = document.createElement('div');
  videodiv.setAttribute('class', 'player');
  let video = document.createElement('video');
  let h2 = document.createElement('h2');
  video.setAttribute('controls', true);
  let mp4source = document.createElement('source');
  let webmsource = document.createElement('source');
  mp4source.setAttribute('type', 'video/mp4');
  webmsource.setAttribute('type', 'video/webm');

  // 添加url
  h2.textContent = name;
  mp4source.src = mp4Url;
  webmsource.src = webmUrl;

  // 添加元素
  video.appendChild(mp4source);
  video.appendChild(webmsource);
  videodiv.appendChild(h2);
  videodiv.appendChild(video);
  videoLi.appendChild(videodiv);
  list.appendChild(videoLi);
}


