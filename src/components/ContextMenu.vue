<template>
  <div class="context-menu">
    <div class="context-menu__item context-menu__item_edit" @click.prevent="editHandler">Edit</div>
    <div class="context-menu__item context-menu__item_remove" @click.prevent="removeHandler">Remove</div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'ContextMenu',
  props: ['item'],
  computed: {
    ...mapState(['currentItem2']),
    ...mapState('general', ['formVisible'])
  },
  methods: {
    ...mapActions(['removeItem2']),
    ...mapMutations(['setCurrentItem2']),
    ...mapMutations('general', ['setFormVisible']),
    editHandler () {
      this.setFormVisible(true)
      this.$modal.show(this.item)
      console.log('this.item', this.item)
      if (this.$route.name !== 'edit') {
        this.$router.push({ name: 'edit', params: this.item })
      }
      if (this.$route.name === 'edit') {
        this.setCurrentItem2(this.item)
      }
    },
    removeHandler () {
      this.removeItem2(this.item)
      this.$modal.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
  .context-menu{
    position: absolute;
    left: -10px;
    top: -20px;
    box-shadow: 2px 3px 6px 1px;
    &__item {
      padding: 10px;
      cursor: pointer;
      &:hover{
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>
