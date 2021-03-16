let btn = document.querySelector('button');
const div = document.querySelector('body div');
const video = document.querySelector('body video');

btn.onclick = function() {
  div.setAttribute('class', 'showing');
}

div.onclick = function() {
  div.setAttribute('class', 'hidden');
}

video.onclick = function(e) {
  e.stopPropagation();
  video.play();
}

video.ondblclick = function(e) {
  e.stopPropagation();
  video.pause();
}