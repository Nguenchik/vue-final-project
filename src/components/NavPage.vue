<template>
  <div>
    <router-link to="/hello">hello</router-link>
    <router-view>

    </router-view>
<!--    <a href="#table">table</a>-->
<!--    <a href="#other">other</a>-->
<!--    <HelloWorld v-if="page === 'hello'"/>-->
<!--    <VTable v-if="page === 'table'"/>-->
  </div>
</template>

<script>
import HelloWorld from '@components/HelloWorld'
import VTable from '@components/VTable'
export default {
  name: 'NavPage',
  props: {
    page: {
      type: String
    }
  },
  components: {
    HelloWorld,
    VTable
  }
}
</script>

<style scoped>

</style>
