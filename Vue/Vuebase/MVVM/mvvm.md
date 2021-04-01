## MVVM:

+ Model-View-View Model 
+ Vue中的MVVM
  + View: DOM
  + Model: JS定义的对象数据
  + ViewModel：vue实例
  + View和Model之间通信需要通过ViewModel
  + ViewModel做两件事
    + Data binding: 数据绑定，把Model里的数据绑定到View里
      + View里面一直是Model对象数据的最新数据，ViewModel帮助做这件事
    + DOM Listerners: 
      + ViewModel通过指令（v-on等)监听View发送的事件
      + 将事件响应的相关东西绑定到Model上

