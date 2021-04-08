<template>
  <div>
    <h2>
      我是cpn组件标题
    </h2>
    <p>
      我是cpn组件的内容，哈哈哈
    </p>
    <h2>{{name}}</h2>
    <div class='li'>
      热更新
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cpn',
    data() {
      return {
        name: 'cpn组件的name'
      }
    }
  }
</script>

<style lang="css" scoped>
  .li {
    font-family: "微软雅黑", sans-serif;
    border: 2px solid black;
    color: rgb(11, 13, 138);
  }
</style>>

</style>