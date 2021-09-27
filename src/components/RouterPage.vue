<template>
  <div>
    <Navigation :page="page"/>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  name: 'RouterPage',
  components: {
    Navigation
  },
  data () {
    return {
      page: ''
    }
  },
  methods: {
    setPage () {
      console.log(location.hash)
      console.log(location.hash.slice(1))
      this.page = location.hash.slice(1)
    }
  },
  mounted () {
    this.setPage()
    window.addEventListener('hashchange', () => {
      this.setPage()
    })
  }
}
</script>

<style scoped>

</style>
