<template>
  <div class="tab-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted() {
      setTimeout(() => {
        this.$emit('update:title', 666)
      }, 2000)
       this.foo.$emit('selected', 888)
       this.foo.$on('selected', (name) => {

       })
    },
    data(){
      return {
        a: 1
      }
    },
    inject: ['foo']
  }
</script>
<style lang="scss">

</style>
