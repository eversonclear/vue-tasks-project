<template>
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page! {{ user?.email }}</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['user'])
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 24px;
    color: #333;
  }
</style>