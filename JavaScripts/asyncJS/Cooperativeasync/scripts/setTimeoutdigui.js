const pelem = document.createElement('p');
document.body.appendChild(pelem);
// 递归
let i = 0;
var diguitimeout;
var timeout = setTimeout(function run(){
  console.log(i);
  pelem.textContent = "时间间隔" + (100 + i * 10) + 'ms';
  i++;
  var k = 100 + i *10;
  diguitimeout = setTimeout(run, k);
}, 1000)

const btnelem = document.createElement('button');
document.body.appendChild(btnelem);
btnelem.textContent = '停止';

btnelem.addEventListener('click', function() {
  clearTimeout(timeout);
  clearTimeout(diguitimeout);
})

// 立即执行，在主线程代码之后执行
setTimeout(function() {
  alert('World');
}, 0);

alert('Hello');
alert('Hello');