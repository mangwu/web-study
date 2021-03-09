/* 生成一个随机数 */
let randomNumber = Math.floor(Math.random() * 100) + 1;

/* 获取文档元素 */

// 记录 结果 重启元素
const record = document.querySelector('.lizi .resultRecord');
const result = document.querySelector('.lizi .result');
const restart = document.querySelector('.lizi .restart');

// 提交按钮 输入文本
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

// 判断对错
function checkGuess() {
  /* 获得用户输入值 */
  let userGuess = Number(guessField.value);

  if (guessCount === 1) {
    record.textContent = '上次猜的数：';
  }
  record.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    result.textContent = '猜对了';
    result.style.backgroundColor = '#d2fe3d';
    restart.textContent = ' ';
    setGameOver();
  } else if (guessCount === 8) {
    result .textContent = '没猜出来，游戏结束';
    restart.textContent = '';
    setGameOver();
  } else {
    result.textContent = '你猜错了！';
    if (userGuess < randomNumber) {
      restart.textContent = '你猜低了';
    } else {
      restart.textContent = '你猜高了';
    }
  }

  guessCount++;
  /* 清空输入框并选中 */
  guessField.value = '';
  guessField.focus();
}

/* 判断游戏是否结束 */
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '开始新游戏';
  restart.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

/* 重启游戏初始化 */
function resetGame() {
  /* 重置次数 */
  guessCount = 1;

  /* 删除信息内容 */
  const resetParas = document.querySelectorAll('.resultParas div');
  for (let i = 0 ; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }


  // /* 删除重置按钮 */
  // resetButton.parentNode.removeChild(resetButton);

  /* 启用表单 */
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  /* 删除结果样式 */
  result.style.backgroundColor = 'white';

  /* 新随机数 */
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);

