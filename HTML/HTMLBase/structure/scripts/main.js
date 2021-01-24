let myHeading = document.querySelector('h1');


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

let a = multiply(4, 7);

//点击事件
document.querySelector('h1').onclick = function(){
    alert('别戳我，我怕疼');
}


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/back.jpeg') {
      myImage.setAttribute('src', 'images/cat.gif');      
    } else {
      myImage.setAttribute('src', 'images/back.jpeg');
    }
}

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hello,world!' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello,world!' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
