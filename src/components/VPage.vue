<template>
  <div class="v-page" >
    <template>
      <div class="v-page__number" v-for="(item, index) in pages" :key="item" @click="choosePage(index)">
        {{ item }}
      </div>
    </template>
    <div @click="clickHandler(index)" v-for="(item,index) in makeArray" :key="index">
      {{ index }}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'VPage',
  props: ['list'],
  computed: {
    ...mapState(['categoryList', 'categoryList2']),
    makeArray () {
      return this.categoryList
    },
    pages () {
      return this.categoryList2.length ? Math.ceil(this.categoryList2.length / 5) : 1
    }
  },
  methods: {
    ...mapMutations(['setActiveList']),
    choosePage (page) {
      this.$emit('choose-page', page)
    },
    clickHandler (page) {
      this.setActiveList(this.categoryList[page])
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
