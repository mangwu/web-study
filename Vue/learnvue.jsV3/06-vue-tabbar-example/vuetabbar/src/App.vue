<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <tab-bar>
      <tab-bar-part>
        <div class='tab-bar-item'>岩芯识别</div> 
        <div class='tab-bar-item'>项目管理</div>
        <div class='tab-bar-item'>成员管理</div>
        <div class='tab-bar-item'>系统设置</div>
      </tab-bar-part>
      <tab-bar-part></tab-bar-part>
      <tab-bar-part>
        <div class='tab-bar-right'>{{username}}</div>
        <div class='tab-bar-right'>|</div>
        <div class='tab-bar-right'>|</div>
        <div class='tab-bar-right'>|</div>
      </tab-bar-part>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from './components/tabbar/TabBar'
import TabBarPart from './components/tabbar/TabBarPart'

export default {
  name: 'App',
  data() {
    return {
      username: 'mangwu'
    }
  },
  components: {
    TabBar,
    TabBarPart
  }
}
</script>
<style>
  @import "./assets/css/base-style.css";
  #app {
    width: 100%;
    margin: 0 auto;
  }
  
</style>
