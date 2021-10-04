<template>
  <div>
    <input type="text" name="operand1" v-model.number="operand1">
    <input type="text" name="operand2" v-model.number="operand2">
    <button name="+" @click="sumHandler">sum</button>
  </div>
</template>

<script>
export default {
  name: 'FakeCalc',
  data () {
    return {
      operand1: 0,
      operand2: 0,
      result: 0
    }
  },
  methods: {
    sumHandler () {
      this.result = this.operand1 + this.operand2
    }
  }
}
</script>

<style scoped>

</style>
