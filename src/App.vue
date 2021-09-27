<template>
  <div id="app">
    <Schedule v-if="0"/>
    <RouterPage/>
  </div>
</template>

<script>
import Schedule from './components/Schedule.vue'
import RouterPage from './components/RouterPage.vue'
export default {
  name: 'App',
  components: {
    Schedule,
    RouterPage
  },
  data () {
    return {
      toShow: false
    }
  },
  methods: {
    toSwitch () {
      this.toShow = !this.toShow
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
