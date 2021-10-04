<template>
  <div id="app">
    <Schedule v-if="0"/>
    <RouterPage v-if="0"/>
    <ModalWindowAdd v-if="0"/>
    <div v-if="0">
      <ModalWindowAdd v-if="addFormShown" />
      <button @click="addFormShown = true">ADD NEW COST +</button>
    </div>

    <ModalWindow/>
  </div>
</template>

<script>
import Schedule from './components/Schedule.vue'
import RouterPage from './components/RouterPage.vue'
import ModalWindow from './components/ModalWindow'

export default {
  name: 'App',
  components: {
    Schedule,
    RouterPage,
    ModalWindow
  },
  data () {
    return {
      toShow: false
    }
  },
  methods: {
    onShown (settings) {
      console.log(settings)
    },
    onHide () {
      console.log('close')
    },
    toSwitch () {
      this.toShow = !this.toShow
    }
  },
  mounted () {
    this.$kekus.EventBus.$on('shown', this.onShown)
    this.$kekus.EventBus.$on('hide', this.onHide)
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
