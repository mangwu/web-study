<template>
  <div>
    <h2>我是用户中心</h2>
    <p>我是用户内容</p>
    <div>
      username: {{userId}}
    </div>
    <p>
      <!-- 直接拿到route因为$route相当于在data中的一个属性，使用mustache直接获取 -->
      {{$route.params.userName}}
    </p>
    <div>
      <button @click='btnClickRouter'>
        打印$router
      </button>
    </div>
    <div>
      <button @click='btnClickRoute'>
        打印$route
      </button>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'User',
  data() {
    return {
      username: 'mangwu'
    }
    
  },
  methods: {
    btnClickRouter() {
      // $router就是index.js中的路由实例
      console.log(this.$router);
    },
    btnClickRoute() {
      // router实例中的routes中的当前url（路由）
      console.log(this.$route);
    }
  },
  computed: {
    userId() {
      // 活跃状态下的路由index.js中的routes数组中的一个活跃路由
      // 拿到userId
      return this.$route.params.userName
    }
  },
  created() {
    console.log('created');
  },
  
}

</script>

<style scoped>

</style>