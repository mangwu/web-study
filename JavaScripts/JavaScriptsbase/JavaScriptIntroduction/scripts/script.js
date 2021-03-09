function createParagraph() {
  let para = document.createElement('p');
  para.textContent = '你点击了这个按钮！';
  const p = document.querySelector('body main article:nth-child(4) .lizi .outjsdiv')
  p.appendChild(para);
}

const buttons = document.querySelectorAll('body main article:nth-child(4) .lizi .outjsdiv button.outjs');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
