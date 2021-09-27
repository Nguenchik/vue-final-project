<template>
  <div>
    <header>
      <a href="#hello">Hello</a>
      <a href="#dashboard">Dashboard</a>
      <a href="#unknown">404</a>
    </header>
    <HelloWorld v-if="page === 'hello'" />
    <Schedule v-else-if="page === 'dashboard'" />
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
  }
}
</script>

<style scoped>

</style>
