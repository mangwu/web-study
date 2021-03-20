const canvas = document.querySelector('canvas');

const fillbtn = document.querySelector('div button:nth-child(1)');

const alertbtn = document.querySelector('div button:nth-child(2)');


canvas.width = 680;
canvas.height = 400;

let ctx = canvas.getContext('2d');

// 度弧转换
function degToRad(degree) {
  return degree * Math.PI / 180;
}

// 随机数[min, max)
function random(min, max) {
  return Math.floor(Math.random() * (max-min) ) + min;
}

fillbtn.addEventListener('click', ()=>{
  for(let i = 0; i < 50; i++) {
    ctx.fillStyle = 'rgba(45, 255, 85, 0.5)';
    ctx.beginPath();
    ctx.arc(random(0, canvas.width), random(0, canvas.height), random(2, 80), degToRad(0), degToRad(360), false);
    ctx.fill();
  }
});

alertbtn.addEventListener('click', function() {
  alert('hello');
})