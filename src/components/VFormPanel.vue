<template>
  <div class="v-form-panel">
    <div class="v-form-panel__btn" @click="changeHandler">{{ formVisible ? '- Hide' : '+ Show' }} Form</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'VFormPanel',
  computed: {
    ...mapState('general', ['formVisible'])
  },
  methods: {
    ...mapMutations('general', ['setFormVisible']),
    changeHandler () {
      this.setFormVisible()
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-form-panel{
    &__btn {
      max-width: 300px;
      padding: 20px 30px;
      border-radius: 5px;
      color: rgba(0, 163, 255, 0.9);
      border: 1px solid rgba(0, 163, 255, 0.2);
      transition: 0.3s;
      cursor: pointer;
      &:hover{
        transition: 0.3s;
        transform: scale(1.01);
        box-shadow: 1px 2px 10px rgba(0, 163, 255, 0.2);
      }
    }
  }
</style>
