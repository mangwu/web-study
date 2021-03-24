// 浏览器信息
console.log(navigator.appVersion);
console.log(navigator.userAgent);

// 窗口大小
console.log(window.innerWidth);
console.log(window.innerHeight);

// 获得元素引用 HTMLParagraphElement接口(直接父接口HTMLElement)
var para = document.querySelector('section p');
// 父接口Node中的属性
para.textContent = '修改文本';

// 修改本接口中的属性
para.align = 'right';

// 创建并添加节点
var divelem = document.createElement('div');
var para2 = document.createElement('p');
para2.textContent = '添加到div元素的para2';
// 使用Node.appendChild()
divelem.appendChild(para2);
document.body.appendChild(divelem);

// 创建文本节点
var text = document.createTextNode('createTextNode');
var text2 = document.createTextNode('createTextNode2');

// 添加文本节点
var sect = document.querySelector('section');


sect.appendChild(text);
sect.appendChild(text2);

sect.appendChild(para);
// 节点复制
document.body.appendChild(sect.cloneNode(1));
document.body.appendChild(sect.cloneNode(1));
document.body.appendChild(sect.cloneNode(1));

// 删除子节点
document.body.removeChild(sect);
// 删除自身
para2.parentNode.removeChild(para2);

// 添加样式
var sect2 = document.querySelector('section:nth-of-type(2)');
console.log(sect2);
sect2.style.border = 'solid 2px red';
sect2.style.padding = '10px';

// 通过设置属性添加样式
var sect3 = document.querySelector('section:nth-of-type(3)');
sect3.setAttribute('class', 'hightlight');