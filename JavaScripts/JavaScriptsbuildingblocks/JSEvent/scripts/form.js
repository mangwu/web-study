const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value == '' || lname.value == '') {
    // 停止表单提交
    e.preventDefault();
    fname.focus();
    para.textContent = '不能为空';
  }
}
