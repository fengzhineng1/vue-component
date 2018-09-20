<template>
  <div class="row">
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
    mounted(){
      console.log(this.$children)
      console.log('this.gutter:', this.gutter)
      this.$children.forEach(vm => {
        console.log('vm:', vm)
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
