// 元素引用
// 存储数据用的表单元素
var rememberDiv = document.querySelector('.remember');
var enterName = document.querySelector('.remember #entername');
var submitName = document.querySelector('.remember #submitname');
var form = document.querySelector('form');

// 删除数据用的表单数据
var forgetDiv = document.querySelector('.forget');
var forgetName = document.querySelector('.forget input[type="reset"]');

// 根据存储数据，更新网站元素
var h1 = document.querySelector('h1');
var para = document.querySelector('.personal-greeting');

// 阻止表单提交（因为使用了form元素）
form.onsubmit = function(e) {
  e.preventDefault();
}

// 存储数据
submitName.addEventListener('click', function(e) {
  // 保存输入框数据
  if (enterName.value) {
    localStorage.setItem('name', enterName.value);
  }
  // 清空输入框
  enterName.value = '';
  // 更新网站元素
  nameDisplayCheck();
});

// 清空或删除数据
forgetName.addEventListener('click', function() {
  // 删除数据
  if (localStorage.name) {
    localStorage.removeItem('name');
  }
  // 更新网站元素
  nameDisplayCheck();
});

// 更新网站元素
function nameDisplayCheck() {
  // 检查键值对
  if (localStorage.name) {
    let nameValue = localStorage.name;
    // 修改网页信息
    h1.textContent = 'Welcome,' + nameValue;
    para.textContent = 'Welcome to our website ' + nameValue + "! We hope you have fun while you are here.";
    // 隐藏输入名称框
    rememberDiv.style.display = 'none';
    forgetDiv.style.display = 'block'; 
  } else {
    // 空白或没有
    h1.textContent = 'Welcome to our website.';
    para.textContent = 'Welcome to our website  ! We hope you have fun while you are here.';
    // 隐藏删除按钮，显示输入名称框
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}

// 每次加载时允许一次nameDisplayCheck()检查是否有name
window.onload = nameDisplayCheck;
