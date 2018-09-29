<template>
  <div @click="tabsChange" class="tab-item" :class="{ active, itemDisabled: disabled }">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    inject: ['foo'],
    props: {
      name: String | Number,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: false
      }
    },
    mounted() {
      this.foo.$on('selected', (name, vm) => {
        if (name===this.name) {
          this.active = true
        }
        else {
          this.active = false
        }
      })     
    },
    methods: {
      tabsChange(name){
        if (this.disabled) return;
        this.active = true
        this.foo.$emit('selected', this.name, this)
      }
    }
  }
</script>
<style lang="scss">
  $border-bt-color: blue;
  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    flex-shrink: 0;
    cursor: pointer;

    &.active {
      color: blue;
    }

    &.itemDisabled {
      color: gray;
      cursor: not-allowed;
    }
  }
</style>
