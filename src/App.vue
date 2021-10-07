<template>
  <v-app>
    <v-app-bar>v-app-bar</v-app-bar>
    <v-system-bar>v-system-var</v-system-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-bottom-navigation>v-bottom-navigation</v-bottom-navigation>
    <v-footer>v-footer</v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  components: {
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
