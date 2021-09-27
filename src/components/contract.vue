<template>
  <div class="contract">
    <p>ContractID: {{}}</p>
    <button @click="testHandler">GET PARAMS FROM URP PARAMS</button>
  </div>
</template>

<script>
export default {
  name: 'contract',
  computed: {
    contractId () {
      return ''
    }
  },
  methods: {
    testHandler () {
      console.log(this.$route.params)
    }
  }
}
</script>

<style scoped>

</style>
