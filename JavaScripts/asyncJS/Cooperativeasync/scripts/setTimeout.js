// 计时器
console.log('starting!');

let startdate = new Date();
let paraElem = document.createElement('p');
paraElem.textContent = '现在时间:' + startdate.toString() + ', 5s后会出现下一个时间：';
console.log(paraElem.textContent);
document.body.appendChild(paraElem);

// 定义方法
function printTime(name) {
  var mydate = new Date();
  let para = document.createElement('p');
  para.textContent = mydate.toString();
  document.body.appendChild(para);
  console.log(name);
  btn.disabled = 'true';
}

let myPrinttimeout;
myPrinttimeout = setTimeout(printTime, 5000, 'mangwu')


// 超时清除 
const btn = document.createElement('button');
btn.textContent = '清除超时'
btn.style.position = 'absolute';
btn.style.top = '50%';
btn.style.left = '2%';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  if (!document.querySelector('p:nth-of-type(2)')) {
    console.log(document.querySelector('p:nth-of-type(2)'));
    clearTimeout(myPrinttimeout);
    alert('取消添加5s后的时间显示');
    btn.disabled = 'true';
  }
})


// let myGreeting = setTimeout(function() {
//   alert('Hello, Mr. Universe!');
// }, 2000)