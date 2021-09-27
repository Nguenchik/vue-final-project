<template>
  <div>
    <header>
      <div @click="clickParamsHandler">
        CLICK WITH PARAMS
      </div>
      <div @click="clickHandler">
        CLICK ME
      </div>
      <router-link to="/hello">hello</router-link>
      <router-view>

      </router-view>
    </header>
    <HelloWorld v-if="page === 'hello'" />
    <Schedule v-else-if="page === 'dashboard'"/>
<!--    <Page404 v-else />-->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Schedule from '@/components/Schedule'
export default {
  name: 'Navigation',
  props: {
    page: String
  },
  components: {
    Schedule,
    HelloWorld
  },
  methods: {
    clickHandler () {
      this.$router.push({ name: 'table' })
    },
    clickParamsHandler () {
      console.log('query')
      this.$router.push({ name: 'contract', query: { id: '12312312' } })
    },
    linkHandler () {
      const links = document.querySelectorAll('a')
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault()
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
