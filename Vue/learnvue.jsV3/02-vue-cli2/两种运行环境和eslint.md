# 运行环境

### 1. runtime+compiler

```vue
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

// template解析成ast

// ast编译成render函数

// render函数渲染成VDOM

// VDOM转化为真实UI(DOM)

### 2. runtime-only

```
new Vue({
  el: '#app',
  // 
  render: h => h(App)
})
```

// 没有template 直接通过render函数把APP变成VDOM

// VDOM ->UI

+ h函数就是createElement()函数
+ 封装的一个函数，用于将模板元素挂载到el中的
+ 可以直接传入组件进行渲染

### 3. 比较

runtime-compiler(v1) =>需要template和ast相关代码

runtime-only(v2) =>不需要编译template和ast转化成render函数

1. runtime-only性能更高
2. runtime-only体积更小（小6kb）

## Vue程序运行过程

1. template传入vm.options
2. 解析(parse)成抽象语法树(abstract syntax tree)
3. 编译ast成render函数 render(functions)
4. render函数将模板转化为虚拟DOM(virtual dom)
5. 渲染虚拟dom为真实DOM(UI)



## .vue文件中的template由谁处理

#### vue-template-compiler

+ 解析vue文件时
  + vue-loader 加载vue文件
  + vue-template-compiler 解析template为render函数
+ App对象里没有template信息，只有render函数
+ 所有组件template都被渲染成了render函数

#### 所以：

开发时依赖包括vue-template-compiler

运行时依赖只有vue而没有vue-compiler

最终使用runtime-only版本即可