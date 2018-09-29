<template>
  <div class="tab-panel" :class="{ active }">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      name: {
        type: String,
        isRequire: true 
      }
    },
    data(){
      return {
        active: false
      }
    },  
    inject: ['foo'],
    mounted() {
      this.foo.$on('selected', (name) => {
        if (name === this.name) {
          console.log('name:', name, '')
          this.active = true
        }
        else {
          this.active = false
        }
      })
    },
  }
</script>
<style lang="scss">
  .tab-panel {
    display: none;
    padding: 10px;
    &.active {
      display: block;
    }
  }
</style>
