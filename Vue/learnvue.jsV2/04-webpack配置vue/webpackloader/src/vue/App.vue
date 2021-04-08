<template>
  <div id='app'>
    <h2 class='title'>
      {{message}}
    </h2>
    <p>
      {{name}}
    </p>
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  name: 'App',
  // 包括方法都可以抽取 抽取到
  data() {
    return {
      message: 'Hello, webpack',
      name: 'mangwu'
    }
  },
  //注册子组件
  components: {
    Cpn,
  }
}
</script>

<style scoped lang="css">
  .title {
    color: green;
  }
</style>
