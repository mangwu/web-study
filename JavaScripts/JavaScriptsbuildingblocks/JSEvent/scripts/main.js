const btn = document.querySelector('body button');
const html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}




btn.onclick = function(e) {
  console.log(e);
  let red = random(256);
  let green = random(256);  
  let blue = random(256);
  var color = 'rgb(' + red + ',' + green + ',' + blue +')';
  console.log(color);
  html.style.backgroundColor = color;
}

