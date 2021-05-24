'use strict';


// 导入导出实现原理
// 模块a
let exportmodule = {
  n: 'Hello',
  greet(params) {
    console.log(`${n}, ${params}!`)
  },
  exports() {
    let that = this;
    return {
      greet: that.greet,
      n: that.n,
    }
  }
}


// 准备模块
let modulex = {
  id: 'exportmodule',
  exports: {

  }
}
// 加载方法
let load = function(module) {
  // 读取导出模块(读取要导出模块的exports)
  return module.exports()
}

//读取模块

let exported = load(exportmodule)

// 保存导出的模块
let save = function(modulex,exported) {
  modulex.exports = exported
}

// 保存导出的对象
save(modulex, exported)

// require 函数
let requirex = function(exportname) {
  if (modulex.id === exportname) {
    return modulex.exports
  }
}

// import模块
let { greet, n } = requirex('exportmodule')

let s = 'mangwu'

greet(s)

