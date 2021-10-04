<template>
  <div>
    <form class="v-form">
      <input class="v-form__input" placeholder="Date" v-model="date" />
      <input class="v-form__input" placeholder="Amount" v-model.number="amount" />
      <input class="v-form__input" placeholder="Type" v-model="type" />
      <button name="v-btn" class="v-form__btn" @click="onSaveHandler">Save!</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'VForm',
  props: ['idCount'],
  data () {
    return {
      amount: '',
      type: '',
      date: ''
    }
  },
  computed: {
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    ...mapMutations(['setNameOfMutation']),
    onSaveHandler () {
      const data = {
        id: this.idCount + 1,
        amount: this.amount,
        type: this.type,
        date: this.date || this.getCurrentDate
      }
      this.setNameOfMutation(data)
      this.$emit('add', data)
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
