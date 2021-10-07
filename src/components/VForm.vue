<template>
  <div>
    <form class="v-form">
      <v-text-field class="v-form__input" placeholder="Date" v-model="date" />
      <v-select :items="testItems" class="v-form__input" placeholder="Amount" v-model.number="amount" />
      <v-text-field class="v-form__input" placeholder="Type" v-model="type" />
      <div v-show="isEmpty" class="v-form__btn" @click="onSaveHandler">Save!</div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getCurrentDate } from '@/utils'
import { quickBTNs } from '@/assets/selects'
export default {
  name: 'VForm',
  data () {
    return {
      amount: '',
      type: '',
      date: '',
      testItems: ['alex', 'anna', 'igor']
    }
  },
  watch: {
    '$route' (to, from) {
      // способ отслеживания изменения роутинга
      // this.amount = this.getRouteParams.name
      // this.type = this.getRouteParams.params?.value
    }
  },
  mounted () {
    this.setParams()
  },
  computed: {
    ...mapState(['categoryList2']),
    list () {
      return quickBTNs
    },
    getRouteParams () {
      return {
        name: this.$route.name,
        params: this.$route.params
      }
    },
    isEmpty () {
      return this.date && this.amount && this.type
    }
  },
  methods: {
    ...mapMutations(['addDataToList', 'addDataToList2']),
    ...mapMutations('general', ['setFormVisible']),
    getCoincidence () {
      return this.list.some(el => el.category === this.$route.name)
    },
    getCurrentDate,
    setParams () {
      if (this.getCoincidence()) {
        this.date = this.getCurrentDate()
        this.amount = this.getRouteParams.name
        this.type = this.getRouteParams.params?.value
      } else {
        this.date = null
        this.amount = null
        this.type = null
      }
    },
    onSaveHandler () {
      const data = {
        id: this.categoryList2.length + 1,
        amount: this.amount,
        type: this.type,
        date: this.date || this.getCurrentDate()
      }
      this.addDataToList2(data)
      this.addDataToList(data)
      // закрыть форму
      this.setFormVisible(false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-form{
    width: 100%;
    max-width: 500px;
    margin: 50px auto;
    color: rgba(0, 163, 255, 0.1);
    &__input{
      display: block;
      width: 100%;
      outline: none;
      border: 1px solid rgba(0, 163, 255, 0.1);
      padding: 10px 15px;
      margin: 15px 0;
      transition: 0.3s;
      color: rgba(0, 163, 255, 1);
      &:hover{
        transition: 0.3s;
        transform: scale(1.01);
        box-shadow: 3px 1px 33px rgba(0, 163, 255, 0.2);
      }
      &::placeholder{
        color: rgba(0, 163, 255, .3);
      }
    }
    &__btn{
      padding: 10px 15px;
      border: 1px solid rgba(0, 163, 255, 0.1);
      background: transparent;
      transition: 0.3s;
      cursor: pointer;
      color: rgba(0, 163, 255, 1);
      &:hover{
        transition: 0.3s;
        transform: scale(1.01);
        box-shadow: 3px 1px 33px rgba(0, 163, 255, 0.2);
      }
    }
  }
</style>
