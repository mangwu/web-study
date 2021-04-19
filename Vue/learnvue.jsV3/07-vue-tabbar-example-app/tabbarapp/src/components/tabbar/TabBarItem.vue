<template>
  <div class='tab-bar-item' @click="itemClick">
    <!-- 定义具名插槽 -->
    <div v-if="!isActive">
      <slot name='item-img'></slot>
    </div>
    <div v-else>
      <slot name='item-active'></slot>
    </div>
    <!-- 通过属性控制颜色 -->
    <div :style="activeStyle">
      <slot name='item-text'></slot>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false,
    }
  },
  computed: {
    isActive: {
      // 拿到当前path数组 判断它是否保存当前组件保存的path 如果不等于-1说明path数组中含有
      get() {
        return this.$route.path.indexOf(this.path) != -1
      },
      set() {
        console.log('');
      }
      
    },
    activeStyle: {
      get() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  },
  methods: {
    itemClick() {
      // if (!this.isActive) {
        
      // }
      this.$router.replace(this.path).catch(err => err) 
      console.log(this.$route.path);
      
    }
  },
  mounted() {
  }

}

</script>

<style scoped>
.tab-bar-item {
  /* 均匀分布 */
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 1.4rem;
}
/* 如果设置在插槽上会无效 插槽会被替换，所以class也会被替换 */
/* .active {
  color: red;
} */
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>