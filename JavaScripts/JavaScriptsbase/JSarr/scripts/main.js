// 访问和修改数组元素
let arr = ['brad', 25, 'iia',[1,'asc','asc']];

console.log(arr, arr[2]);
arr[3][1] = 2;
console.log(arr[3][1])

// 获取数组长度

console.log(arr.length)

// 字符串方法，分隔字符串到数组
let mydata = '1 kk 254 asc as';
let myarr = mydata.split(' ');
console.log(myarr);

// 数组方法，合并数组项到字符串
let mystring = myarr.join(' and ');
console.log(mystring)


// 数组方法，默认以逗号间隔合并到字符串
var arr2 = ['basd', 2, ['asd',5, ['asd',2]]];
console.log(arr2.toString());
console.log(arr2.join(' '));

// 添加或删除数组项

myarr.push('tianjia', 2)
console.log(myarr)

console.log(typeof myarr.pop())

// 从头开始删除或添加数组项

console.log(myarr.unshift('2'));
console.log(myarr);

console.log(typeof myarr.shift());



// 笑话生成器

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText = 
  "今天气温 34 摄氏度，:inserta:出去遛弯。" +
  "当走到:insertb:门前时，突然就:insertc:。" +
  "人们都惊呆了，张雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。";

let insertX= [
  '怪兽威利',
  '大老爹',
  '圣诞老人'
];

let insertY = [
  '肯德基',
  '迪士尼乐园',
  '白宫'
];

let insertZ = [
  '自燃了',
  '在人行道化成了一坨泥',
  '变成一条鼻涕虫爬走了'
];


// 事件监听器和生成笑话的函数定义
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('张雷', name);
  }

  if(document.getElementById("american").checked) {
    let weight = Math.round(300);
    let temperature = Math.round(94);
    newStory = newStory.replace('34', temperature);
    newStory = newStory.replace('摄氏度', '华氏度');
    newStory = newStory.replace('130', weight);
    newStory = newStory.replace('公斤', '磅');
  }
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':inserta:', xItem);
  newStory = newStory.replace(':insertb:', yItem);
  newStory = newStory.replace(':insertc:', zItem);
  newStory = newStory.replace(':inserta:', xItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

