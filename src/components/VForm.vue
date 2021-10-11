<template>
  <div>
    <form class="v-form">
      <input class="v-form__input" placeholder="Date" v-model="currentItem2.date" />
      <input class="v-form__input" placeholder="value" v-model.number="currentItem2.value" />
      <input class="v-form__input" placeholder="Category" v-model="currentItem2.category" />
      <div v-if="isEmpty || !isEdited" class="v-form__btn" @click="onSaveHandler">Save!</div>
      <div v-else-if="isEdited" class="v-form__btn" @click="editHandler">Edit!</div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { getCurrentDate } from '@/utils'
import { quickBTNs } from '@/assets/selects'
export default {
  name: 'VForm',
  data () {
    return {
      value: '',
      category: '',
      date: ''
    }
  },
  watch: {
    '$route' (to, from) {
      // способ отслеживания изменения роутинга (нужно убрать v-if а то этой компоненты нет и из-за этого не работает
      this.value = this.$route.name
      this.category = this.$route.params?.value
    }
  },
  mounted () {
    this.setParams()
    if (this.isEdited) {
      const { category, date, value } = this.currentItem2
      this.date = date
      this.value = value
      this.category = category
    }
  },
  computed: {
    ...mapState(['categoryList2', 'currentItem2']),
    isEdited () {
      return this.$route.name === 'edit'
    },
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
      return this.date && this.value && this.category
    }
  },
  methods: {
    ...mapMutations(['addDataToList']),
    ...mapMutations('general', ['setFormVisible']),
    ...mapActions(['editList2', 'addDataToList2']),
    getCoincidence () {
      return this.list.some(el => el.category === this.$route.name)
    },
    getCurrentDate,
    setParams () {
      if (this.getCoincidence()) {
        this.date = this.getCurrentDate()
        this.value = this.$route.name
        this.category = this.$route.params?.value
      } else {
        this.date = null
        this.value = null
        this.category = null
      }
    },
    onSaveHandler () {
      const { category, date, value } = this.currentItem2
      const data = {
        id: this.categoryList2.length + 1,
        value: value,
        category: category,
        date: date || this.getCurrentDate()
      }
      this.addDataToList2(data)
      this.addDataToList(data)
      // закрыть форму
      this.setFormVisible(false)
    },
    editHandler () {
      this.setFormVisible(false)
      this.$router.push({ name: 'home' })
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
