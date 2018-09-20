<template>
  <div class="row" >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'g-row',
    props: {
      gutter: {
        type: [ String, Number ],
        default: 0
      }
    },
    computed: {

    },
    mounted(){
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>
<style lang="scss">
  .row {
    display: flex;
  }
</style>
