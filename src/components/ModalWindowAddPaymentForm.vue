<template>
  <div>
    <button @click="$modal.show({name: 'asd', param2: 123123})">Close</button>
  </div>
</template>

<script>
export default {
  // props: {
  //   ModalWindoW: String,
  //   modalWindowSettings: Object
  // },
  methods: {
    onCloseClick () {
      this.$emit('close')
    }
  }
}
</script>
