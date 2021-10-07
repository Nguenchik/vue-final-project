<template>
  <div>
    <div class="links">
      <div class="links__container">
        <v-btn color="red" plain @click="goHome" class="links__btn">Home</v-btn>
        <v-form-panel/>
        <div v-for="item in list" :key="item.category" class="links__btn mb-2" @click="linkHandler(item)">
          {{item.category}}: {{item.params.value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VFormPanel from '../components/VFormPanel'
import { mapMutations } from 'vuex'
import { quickBTNs } from '@/assets/selects'
export default {
  components: {
    VFormPanel
  },
  name: 'VLinks',
  computed: {
    list () {
      return quickBTNs
    }
  },
  methods: {
    ...mapMutations('general', ['setFormVisible']),
    linkHandler (item) {
      const { category: name, params } = item
      if (this.$route.name !== name) {
        this.$router.push({ name, params })
        this.setFormVisible(false)
      }
    },
    goHome () {
      if (this.$route.name !== 'home') {
        this.$router.push({ path: '/' })
        this.setFormVisible(false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .links{
    &__container {
      margin: auto;
      max-width: 800px;
      display: flex;
      justify-content: space-between;
    }
    &__btn {
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
