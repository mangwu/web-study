let string = '我是创建的字符串内容';
console.log(string);

/* 测试单双引号*/

let string1 = '单引号中含有"双引号"';
let string2 = "双引号中含有'单引号'";

console.log(string1);
console.log(string2);

let stringn = '换行\n源代码第二行';
console.log(stringn);


let stringr = '回车\r在console和HTML源代码端都无用';

const para = document.querySelector('.table + div');
console.log(stringr);
para.textContent = stringn;

let stringv = '垂直\v制表符';
console.log(stringv);

let stringt = '水平\t制表符';
console.log(stringt);


var stringb = '退\b格';
console.log(stringb);

var stringf = '换页\\f符号显示为\f';
console.log(stringf);

para.textContent += ' '
para.textContent += stringf;


let stringnum = '123';
stringnum = Number(stringnum);
console.log(stringnum,typeof(stringnum))

let mynum = 123;
mynum = mynum.toString();
console.log(mynum,typeof(mynum))

/* 字符串长度 */
const textinput = document.querySelector('.lizi .len input[type="text"]');
const submitinput = document.querySelector('.lizi .len input[type="submit"]');
const lendiv = document.querySelector('.lizi .len');
console.log(textinput);
console.log(submitinput);

var pa = document.createElement('p');
lendiv.appendChild(pa);
pa.style.textIndent = 0;
pa.style.margin = '1em auto'

submitinput.onclick = function() {
  let textinputstr = textinput.value;
  
  if(textinputstr == ''){
    pa.textContent = '不要填写空白，请任意输入字符串！';
    pa.style.color = 'red';
    textinput.focus();
  } else {
    pa.textContent = '"' + textinputstr + '"的字符长度为' + textinputstr.length;
    pa.style.color = "black"
    
  }
  console.log(textinputstr)

}

/* 索引字符 */

let stringchar = 'abcde';
for(var i = 0; i < stringchar.length; i++) {
  console.log(stringchar[i])
}

/* 子字符串 */

console.log(stringchar.indexOf('bc'));

/* 切片 */
console.log(stringchar.slice(1, 3));

let namedata = 'I am Alice';
console.log(namedata.toUpperCase());
console.log(namedata.toLowerCase());

console.log(namedata.replace('Alice', 'mangwu'));