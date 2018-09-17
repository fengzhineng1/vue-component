<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default  {
    mounted() {
      for (let node of this.$el.children) {
        if (node.nodeName.toLowerCase() == 'div') {
          console.warn('子节点必须是g-button');
        }
      }
    }
  }
</script>
<style lang="scss">
  .group-btn {

    display: inline-flex;
    vertical-align: middle;

    > .g-button {
        border-radius: 0;
        margin-left: -1px;
      &:first-child {
        z-index: 1;
        position:relative;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }

  }
</style>
