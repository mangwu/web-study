<template>
  <div>
    <h3>
      档案
    </h3>
    <h4>个人信息</h4>
    <p>
      <ul>
        <li v-for="(value, key) in info" :key="key">{{key}} : {{value}}</li>
      </ul>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      info:this.$route.query
    }
  },
  created() {
    console.log('Profile created');
  },
}

</script>

<style scoped>

</style>