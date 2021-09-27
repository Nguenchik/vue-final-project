<template>
  <div>
    <NabPage :page="page"/>
  </div>
</template>

<script>
import NabPage from '@components/NavPage'
export default {
  name: 'RouterPageNew',
  data () {
    return {
      page: ''
    }
  },
  components: {
    NabPage
  }
}
</script>

<style scoped>

</style>
