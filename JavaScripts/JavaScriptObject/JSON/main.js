var headers = document.querySelector('header');
var sections = document.querySelector('section');

// json url
var requestURL = 'json/data.json';

// httprequest
var request = new XMLHttpRequest();

// 使用open()函数打开新的数据请求
request.open('GET', requestURL);

//设定respanseType为json，发送请求
request.responseType  = 'json';
request.send();

// 加载来自服务器的数据
request.onload = function() {
  // 接受数据
  var superHeros = request.response;
  console.log(superHeros);
  var stringdata = JSON.stringify(superHeros);
  console.log(stringdata);
  // 样式header 创造卡片加载到section
  styleHeader(superHeros);
  createCard(superHeros);
}

// 样式标题的方法
function styleHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  headers.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  headers.appendChild(myPara);
}
// 创造卡片
function createCard(jsonObj) {
  var heroes = jsonObj['members'];

  for(i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    var superPowers = heroes[i].powers;
    for(j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    sections.appendChild(myArticle);
  }
}