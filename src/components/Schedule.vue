<template>
  <div>
    <v-table :list="activeList"/>
    <v-page :list="list" @choose-page="choosePageHandler"/>
    <v-form :id-count="list.length" @add="addHandler"/>
  </div>
</template>

<script>
import VTable from '../components/VTable'
import VForm from '../components/VForm'
import VPage from '../components/VPage'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Schedule',
  components: {
    VTable,
    VForm,
    VPage
  },
  data: () => ({
    activeList: [],
    count: 5,
    list: [
      {
        id: 1,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 2,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 3,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 4,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 5,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 6,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 7,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 8,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 9,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 10,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 11,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      },
      {
        id: 12,
        date: '23.02.2021',
        type: 'test',
        amount: 123
      }
    ],
    page: 1
  }),
  computed: {
    ...mapState(['categoryList', 'categoryList2'])
  },
  created () {
    this.fetchData(this.page)
    // this.activeList = this.categoryList.slice(0, 5)
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['setActiveList2']),
    addHandler (data) {
      this.list = [...this.list, data]
    },
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
