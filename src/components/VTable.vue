<template>
  <div>
    <div class="v-table">
      <div class="v-table__container">
        <div class="v-table__row">
          <div class="v-table__col v-table__col_dark">id</div>
          <div class="v-table__col v-table__col_dark">Date</div>
          <div class="v-table__col v-table__col_dark">Category</div>
          <div class="v-table__col v-table__col_dark">Value</div>
        </div>
        <div class="v-table__row" v-for="item in list" :key="item.id">
          <div class="v-table__col">{{ item.id }}</div>
          <div class="v-table__col">{{ item.date }}</div>
          <div class="v-table__col">{{ item.type }}</div>
          <div class="v-table__col">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTable',
  props: ['list']
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
    width: 25%;
    &_dark {
      font-weight: bold;
    }
  }
}
</style>
