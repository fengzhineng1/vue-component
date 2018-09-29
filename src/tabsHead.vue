<template>
  <div class="wrap-tab-head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>
<script>
  export default {
    inject: [ 'foo' ],
    mounted() {
      this.foo.$on('selected', (name, vm) => {
        if (vm) {
          const { left, width } = vm.$el.getBoundingClientRect()
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left}px`
        }
      })
    },
  }
</script>
<style lang="scss">
  .wrap-tab-head {
    display: flex;
    position: relative;
    height: 40px;
    margin: 10px 0;
    border-bottom: 1px solid gray;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid blue;
      transition: all .4s;
    }
  }
</style>
