<template>
  <div class="v-page" >
    <div class="v-page__number" v-for="(item, index) in pages" :key="item" @click="choosePage(index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VPage',
  props: ['list'],
  computed: {
    pages () {
      return Math.ceil(this.list.length / 5)
    }
  },
  methods: {
    choosePage (page) {
      this.$emit('choose-page', page)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-page{
    cursor: pointer;
    display: flex;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    &__number{
      margin: 0 10px;
    }
  }
</style>
