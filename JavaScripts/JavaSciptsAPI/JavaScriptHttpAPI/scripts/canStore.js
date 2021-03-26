// 获取元素引用
var selectcat = document.querySelector('select');
var inputSeach = document.querySelector('input[type="text"]');

var inputSubmit = document.querySelector('input[type="submit"');
var displayCan = document.querySelector('.thing');

// json url
var url='json/can.json'
var products;
var searchname = [];
var typename = [];
// 获取json资源
function fetchJson(url) {
  fetch(url).then((response) => {
    if (response.ok) {
      response.json().then((jsonData) => {
        products = jsonData;
        innitialCan(products.length);
      })
    } else {
      console.log('fetch 出错');
    }
  });
}
// 获取图片资源
function fetchImage(url) {
  fetch(url).then((response) => {
    if (response.ok) {
      response.blob();
    }
  })
  .then((imasrc) => {
    return imasrc;
  })
  .catch((e) => {
    console.log(e.message);
  })
}
// 添加商品
function addCan(i, count) {
  var counts;
  if (count == undefined) {
    counts = i;
  } else {
    counts = count;
  }
  
  console.log(products[i]);
  // 创建商品section
  let section = document.createElement('section');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let para = document.createElement('p');
  // 添加子元素
  section.appendChild(h2);
  section.appendChild(para);
  section.appendChild(image);
  // 读取属性
  let classname = products[i].name;
  if (searchname.length < products.length) {
    searchname[i] = products[i].name;
  }
  // searchname[i] = products[i].name;
  let price = products[i].price;
  let imagesrc = products[i].image;
  if (typename.length < products.length) {
    typename[i] = products[i].type;
  }
  
  // 设置属性
  h2.textContent = classname;
  section.setAttribute('class', classname);
  para.textContent = '$' + price;
  var imgsrc = 'image/' + imagesrc;
  console.log(imgsrc);
  fetch(imgsrc).then((response) => {
    response.blob().then((blob)=>{
      var objectURL = URL.createObjectURL(blob);
      image.src = objectURL;
    })
  });
  // 设置布局
  section.style.gridColumn = counts % 2 + 1;
  displayCan.appendChild(section);
}
// 显示商品资源
function innitialCan(count) {
  for(var i = 0; i < count; i++) {
    addCan(i);
  }
}
fetchJson(url);

// 删除全部section
function deleteSection() {
  var child = displayCan.lastElementChild;
  while (child) {
    displayCan.removeChild(child);
    child = displayCan.lastElementChild;
  }
}

// 筛选select
function chooseItems() {
  var chooseItem = selectcat.value;
  if (chooseItem == 'All') {
    deleteSection();
    innitialCan(products.length);
  } else {
    deleteSection();
    var count = 0;
    for(var i = 0; i < typename.length; i++) {
      if (typename[i] == chooseItem.toLowerCase()) {
        addCan(i, count);
        count++;
      }
    }
  }
}
// 添加监听器
selectcat.addEventListener('change', chooseItems);

// 搜索功能

function searchCan() {
  var searchVaule = inputSeach.value;
  var count = 0;
  deleteSection();
  if (searchVaule != '') {
    for (var i = 0; i < searchname.length; i++) {
      if (searchname[i].indexOf(searchVaule) != -1) {
        addCan(i, count);
        count++;
      }
    }
  }
  if( count == 0 ){ 
    var paranone = document.createElement('p');
    paranone.textContent = '没有找到与' + '"' + searchVaule + '"' + '有关的商品';
    paranone.style.textAlign = 'center';
    paranone.style.gridColumn = '1/3'; 
    paranone.style.color = 'red';
    displayCan.appendChild(paranone);
  }
}

inputSubmit.addEventListener('click', searchCan);



