<template>
  <div>
    <v-links/>
    <v-form v-if="formVisible"/>
    <v-table :list="activeList"/>
    <v-page @choose-page="choosePageHandler"/>
  </div>
</template>

<script>
import VLinks from '../components/VLinks'
import VTable from '../components/VTable'
import VForm from '../components/VForm'
import VPage from '../components/VPage'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Schedule',
  components: {
    VTable,
    VForm,
    VPage,
    VLinks
  },
  data: () => ({
    activeList: [],
    count: 5,
    page: 1
  }),
  computed: {
    ...mapState('general', ['formVisible']),
    ...mapState(['categoryList', 'categoryList2'])
  },
  created () {
    this.fetchData(this.page)
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['setActiveList2']),
    choosePageHandler (page) {
      const startNum = page * this.count
      const lastNum = startNum + this.count
      this.setActiveList2(this.categoryList2.slice(startNum, lastNum))
    }
  }
}
</script>

<style lang="scss">
</style>
