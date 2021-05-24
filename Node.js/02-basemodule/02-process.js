'use strict'

// global.process

console.log(global.process)

// 工作目录
console.log(process.platform);
console.log(process.arch);
console.log(process.cwd())

// 下一次事件循环调用的process.nextTick()
setTimeout(() => {
  process.nextTick(() => {
    console.log('nextTick interval callback');
  })
  console.log('setInterval 异步操作')
  
}, 1000)

process.nextTick(() => {
  console.log('nextTick callback');
})

console.log('nextTick was set');

// 监听进程退出事件
process.on('exit', function(code) {
  console.log('about to exit with code: ' + code);
})

// 环境判断
if (typeof(window) === 'undefined') {
  console.log('Node.js')
} else if(!typeof(global)) {
  console.log('browser')
}

