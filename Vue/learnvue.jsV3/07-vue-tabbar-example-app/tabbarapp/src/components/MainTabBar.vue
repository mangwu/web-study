<template>
    <tab-bar>
      <tab-bar-item path="/home" active-color="pink">
        <template v-slot:item-img>
          <img src="../assets/img/tabbar/index.svg" alt="index" srcset="">
        </template>
        <template v-slot:item-active>
          <img src="../assets/img/tabbar/index_active.svg" alt="" srcset="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="pink">
        <template v-slot:item-img>
          <img src="../assets/img/tabbar/classify.svg" alt="classify" srcset="">
        </template>
        <template v-slot:item-active>
          <img src="../assets/img/tabbar/classify_active.svg" alt="" srcset="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-img>
          <img src="../assets/img/tabbar/shopping.svg" alt="shopping" srcset="">
        </template>
        <template v-slot:item-active>
          <img src="../assets/img/tabbar/shopping_active.svg" alt="" srcset="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-img>
          <img src="../assets/img/tabbar/profile.svg" alt="profile" srcset="">
        </template>
        <template v-slot:item-active>
          <img src="../assets/img/tabbar/profile_active.svg" alt="" srcset="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}

</script>

<style scoped>

</style>