<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link class='rl' tag='button' to='/home/news'>新闻</router-link>
    <router-link class='rl' tag='button' to='/home/message'>消息</router-link>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      path: '/home/news'
    }
  },
  // 组件被创建时回调 钩子函数（回调）
  created() {
    console.log('home created');
  },
  // 虚拟dom渲染到真实dom后回调
  mounted() {
    console.log('home mounted');
  },
  // 界面(其中的动态数据)发生刷新的时候
  updated() {
    console.log('updated');
    
  },
  // 活跃函数,页面活跃时执行的函数 活跃和不活跃函数只有在keep-active组件中才有用
  activated() {
    console.log('Home activated');
    // 每次回来时都默认到了指定path
    this.$router.push(this.path)
  },
  deactivated() {
    console.log('Home deactivate');
    // this.path = this.$route.path
  },  
  // 在路由离开前，
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  },
  // 销毁函数
  destroyed() {
    // 可以看到每次点击到其他组件再回来都会创建一个新的组件，之前的主页组件被销毁了
    console.log('home destroyed');
  }
}

</script>

<style scoped>
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
</style>