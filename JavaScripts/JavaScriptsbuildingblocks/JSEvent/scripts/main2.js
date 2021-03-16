const divs = document.querySelectorAll('body div');

function random(num) {
  return Math.floor(Math.random() * num);
}

function bgChange() {
  return 'rgba(' + random(256) + ',' + random(256) + ',' + random(256) + ',' + Math.random() + ')';
}
for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor =  bgChange();
  }
}