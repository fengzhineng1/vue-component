<template>
  <div class="row" :style="rowStyle" :class="[ align&&`align=${align}`]">
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
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', 'right'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      rowStyle () {
        let { gutter } = this
        return { marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px' }
      }
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
    flex-wrap: wrap;

    &.align-left {
      justify-content: flex-start;
    }

    &.align-center {
      justify-content: center;
    }

    &.align-right {
      justify-content: flex-end;
    }
  }
</style>
