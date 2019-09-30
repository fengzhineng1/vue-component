<template>
  <div class="layout" :class="{ isRow }">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isRow: false
      }
    },
    mounted() {
      console.log('1', 1)
      let isRow = false
      this.$children.forEach(vm => {
        if (vm.$options.name === 'g-sider') {
          isRow = true
        }
      })
      this.isRow = isRow
    },
  }
</script>
<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;

    &.isRow {
      flex-direction: row;
    }
  }
</style>
