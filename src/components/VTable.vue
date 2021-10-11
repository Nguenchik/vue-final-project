<template>
  <div>
    <div class="v-table">
      <div class="v-table__container">
        <div class="v-table__row">
          <div class="v-table__col v-table__col_dark">id</div>
          <div class="v-table__col v-table__col_dark">Date</div>
          <div class="v-table__col v-table__col_dark">Category</div>
          <div class="v-table__col v-table__col_dark">Value</div>
          <div class="v-table__col v-table__col_dark"></div>
        </div>
        <template>
          <div class="v-table__row" v-for="(item,index) in activeList2" :key="index + 'a'">
            <div class="v-table__col">{{ item.id }}</div>
            <div class="v-table__col">{{ item.date }}</div>
            <div class="v-table__col">{{ item.category }}</div>
            <div class="v-table__col">{{ item.value }}</div>
            <div class="v-table__col">
              <div class="v-table__points" @click="settingHandler(item)">
                :
              </div>
              <transition name="fade">
                <ContextMenu v-if="item.id === activeID" :item="item"></ContextMenu>
              </transition>
            </div>
          </div>
        </template>
        <h1>------------------</h1>
        <div class="v-table__row" v-for="(item,index) in activeList" :key="index">
          <div class="v-table__col">{{ item.id }}</div>
          <div class="v-table__col">{{ item.date }}</div>
          <div class="v-table__col">{{ item.category }}</div>
          <div class="v-table__col">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu'
import { mapState } from 'vuex'
export default {
  name: 'VTable',
  data () {
    return {
      activeID: null
    }
  },
  components: {
    ContextMenu
  },
  props: ['list'],
  computed: {
    ...mapState(['activeList', 'activeList2', 'categoryList'])
  },
  mounted () {
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  methods: {
    onShown (settings) {
      this.activeID = null
    },
    onHide () {
      this.activeID = null
    },
    settingHandler (params) {
      this.activeID = params.id
    }
  }
}
</script>

<style lang="scss">
.v-table{
  min-height: 300px;
  max-width: 1024px;
  margin: 50px auto;
  color: rgba(0, 163, 255, 0.9);
  font-family: sans-serif;
  transition: 0.3s;
  &:hover{
    transition: 0.3s;
    transform: scale(1.01);
    box-shadow: 1px 2px 10px rgba(0, 163, 255, 0.2);
  }
  &__container{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  &__row{
    padding: 15px 5px;
    display: flex;
    width: 100%;
    //border-bottom: 1px solid #000;
  }
  &__col{
    position: relative;
    width: 25%;
    &_dark {
      font-weight: bold;
    }
  }
  &__points {
    cursor: pointer;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
