<template>
  <div id="app">
    <h2>
      我是APP组件
    </h2>
    <!-- vue-router注册的一个组件 默认渲染为a标签 -->
    <!-- 使用tag渲染成不同类型，如li button -->
    <!-- replace属性效果是在mode为history时将不使用pushState实现url路由，
    而是使用replaceState实现，历史记录就无效了 -->
    <!-- active-class用于设置当按钮被选中时添加的激活类名，默认为router-link-active -->
    <!-- <router-link to='/home' tag='button' class='rl' replace active-class="active">首页</router-link>
    <router-link to='/about' tag='button' class='rl' replace active-class="active">关于</router-link> -->

    <!-- 在路由里使用了linkActiveClass命名了激活时class名称，不用添加active-class -->
    <router-link to='/home' tag='button' class='rl' replace>首页</router-link>
    <router-link to='/about' tag='button' class='rl' replace>关于</router-link>
    <router-link to='/test' tag='button' class='rl' replace>TEST</router-link>
    <!-- 传递参数时使用对象 -->
    <!-- URL:protocol|scheme://[userinfo@]host[:port]/path|router[?query][#fragment]   查询就是query -->
    <router-link :to="{path: '/profile', query: info}" 
    tag='button' class='rl' replace>个人中心</router-link>
    <router-link v-bind:to="'/user/'+userId" tag='button' class='rl' replace>档案</router-link>
    



    <!-- 不使用router-link使用实现页面路由跳转 -->
    <button class='rl bu' @click='homeClick' disabled>别点</button>
    <button class='rl bu' @click='aboutClick' disabled>别点</button>



    <!-- 组件内容会替代router-view -->
    <!-- exclude会排除能够保存组件状态的功能的组件，其值为组件name,多个name不要随便加空格 -->
    <keep-alive exclude="Profile,User">
      <!-- keep-alive能保存组件状态，不会随意销毁组件 -->
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan',
      message: '你的通知消息',
      info: {
        name: 'mangwu',
        height: 188,
        age: 21
      }
    }
  },
  methods: {
    homeClick() {
      // 通过代码方式修改路径
      // 不要绕过vue-router去修改路径（不要使用history对象的相关方法）
      // vue-router源码在每个组件里都加入了$router属性
      console.log('homeClick');
      /* 在vue-router在3.1.0版本之后，push和replace方法会返回一个promise对象，
      如果跳转到相同的路由 就报promise uncaught异常 可以参考：vue-router releases
      也就是说点击两次跳转相同链接就会报错*/
      this.$router.push('/home')
    },
    aboutClick() {
      console.log('aboutClick');
      this.$router.push('/about')
    }
  }
}
</script>


<style lang="css" scoped>
  #app {
    font-family: '微软雅黑', sans-serif;
    width: 80%;
    margin: 0 auto;
    /* border: 1px solid salmon; */
  }
  .rl {
    color: rgb(126, 126, 126);
    font-family: '微软雅黑', sans-serif;
    padding: 4px 10px;
    border: none;
    background-color: greenyellow;
    font-size: 1.5em;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
  }
  .rl.bu {
    cursor: not-allowed;
  }
  .rl.bu:hover {
    background: greenyellow;
  }
  .rl:focus {
    outline: none;
  }
  .rl:hover {
    background-color: rgb(123, 213, 248);
  }
  /* router-link-active是vue默认点击按钮添加的class 可以通过active-class修改*/
  .rl.active {
    background-color: rgb(123, 213, 248);
    color: black;
  }

</style>>


