<template>
  <div id="app">
    <div id="nav">
      <h1>-----------{{ message }}------------</h1>
      <h2>-------引用共享状态--------</h2>
      <h2>{{$store.state.counter}}</h2>
      <h2>info:{{$store.state.info}}</h2>
      <button @click='updateInfo("name")'>更新信息</button>
      
      <button @click='addition'>+</button>
      <button @click='sub'>-</button>
      <button @click='addCount(5)'>+5</button>
      <button @click='addCount(10)'>+10</button>
      <button @click='addStu'>添加学生</button>

      <h2>-------引用getters预处理后的状态数据--------</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
      <h2>{{$store.getters.more20Stu}}</h2>
      <h2>人数：{{$store.getters.more20StuLength}}</h2>
      <h2>-------引用getters中函数传参--------</h2>
      <h2>大于18岁的人; 
        <ul>
          <li v-for="(item) in $store.getters.moreAgeStu(18)" :key='item.id'>{{item.name}}</li>
        </ul>
      </h2>
      <h2>----------引用modules中模块的状态-------</h2>
      <h2>{{$store.state.a.name}}</h2>
      <h2>{{$store.getters.fullName}}</h2>
      <h2>{{$store.getters.fullName2}}</h2>
      <button @click='updateName("mangwu")'>修改name</button>
      <button @click='asyncUpdateName("kkk")'>异步修改名称</button>
      <h1>-----------HelloVuex组件------------</h1>
      <hello-vuex></hello-vuex>
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import HelloVuex from 'cpns/HelloVuex'
import {
  INCREMENT
} from '@/store/mutations-types'
export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是app组件",
      // $store.state.counter: 0
    };
  },
  computed: {
    
  },
  methods: {
    addition() {
      // 提交方法
      // 统一事件类型
      console.log(INCREMENT);
      this.$store.commit(INCREMENT)
    },
    sub() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // count 称为一个commit的payload载荷
      // 普通的提交风格
      // this.$store.commit('incrementCount', count)
      // 特殊提交风格
      this.$store.commit({
        // 事件类型
        type: 'incrementCount',
        count
      })
    },
    addStu() {
      const stu = {id: 158, name: 'hck', age: 25}
      this.$store.commit('addStudent', stu)
    },
    updateInfo(name) {
      // 经过action
      this.$store
      .dispatch({
        type: "asyncUpdateInfo",
        name,
        completed: () => {
          console.log('里面完成了');
        }

      })
      .then((res)=>{
        console.log('Promise回执');
        res()
      })
      console.log('vue: updateInfo');
    },
    updateName(name) {
      this.$store.commit({
        type: 'updateName',
        name
      })
    },
    asyncUpdateName(name) {
      this.$store.dispatch({
        type: 'asyncUpdateName',
        name,
        completed: () => console.log('asyncUpdateName completed')
      })
      .then((res) => {
        res()
      })
    }
  }
};
</script>

<style>

</style>
