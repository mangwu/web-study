<template>
  <div class='tab-bar-part'>
    <slot></slot>
  </div>
</template> 

<script>

export default {
  name: 'TabBarPart'
}

</script>

<style scoped>
  .tab-bar-part:nth-of-type(1) {
    display: flex;
    flex-grow: 1;
    text-align: center;
    align-items: center;
  }
  .tab-bar-part:nth-of-type(2) {
    flex-grow: 4;
    text-align: center;
  }
  .tab-bar-part:nth-of-type(3) {
    color: rgb(168, 166, 166);
    display: flex;
    flex-grow: 1;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    align-items: center;
    padding: 15.5px 0;
  }
  .tab-bar-item:nth-of-type(1) {
    font-weight: bold;
    font-size: 2.0rem;
    padding-left: 28px;
    line-height: 1.5;
    background-image: url('../../assets/img/tabbar/AIlogo.svg');
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: 10px 15px;
    text-align: center;
  }
  .tab-bar-item:nth-of-type(2):hover,
  .tab-bar-item:nth-of-type(3):hover, 
  .tab-bar-item:nth-of-type(4):hover {
    background-color: rgba(130, 156, 243, 0.7);
  } 


  .tab-bar-right {
    min-width: 50px;
    padding: 2px 10px;
  }
  .tab-bar-right:nth-of-type(1) {
    line-height: 1.5;
    background-image: url('../../assets/img/tabbar/touxiang.svg');
    background-repeat: no-repeat;
    background-size: 25px 25px;
    padding-left: 28px;
    color: white;
  }
  .tab-bar-right:nth-of-type(2) {
    line-height: 1.5;
    background-image: url('../../assets/img/tabbar/首页.svg');
    background-repeat: no-repeat;
    background-size: 25px 25px;
    padding-left: 32px;
  }
  .tab-bar-right:nth-of-type(3) {
    line-height: 1.5;
    background-image: url('../../assets/img/tabbar/color.svg');
    background-repeat: no-repeat;
    background-size: 25px 25px;
    padding-left: 30px;
  }
  .tab-bar-right:nth-of-type(4) {
    line-height: 1.5;
    background-image: url('../../assets/img/tabbar/exit.svg');
    background-repeat: no-repeat;
    background-size: 25px 25px;
    padding-left: 30px;
  }
</style>

