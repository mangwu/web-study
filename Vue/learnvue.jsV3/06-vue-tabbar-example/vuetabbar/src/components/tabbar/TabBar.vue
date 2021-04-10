<template>
  <div>
    <div class='tab-bar'>
      <slot></slot>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
  data() {
    return {
      username: 'mangwu'
    }
  }
}

</script>

<style scoped>
  .tab-bar {
    color: white;
    display: flex;
    background-color: rgb(112, 145, 252);
    line-height: 1.2;
    height: 50px;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 5px 7px rgba(130, 156, 243, 0.5);
  }
  
  
</style>