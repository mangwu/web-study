<template>
  <div>
    <!-- 引用公共状态 -->
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
  </div>
</template>

<script>

export default {
  name: 'HelloVuex',
  data() {
    return {

    }
  },
  
  // 父子组件传递
  // props: {
  //   counter: {
  //     type: Number,
  //     default: 2
  //   }
  // }

}

</script>

<style scoped>

</style>