<template>
  <div  
    class="col" 
    :class="colClass"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'g-col',
    props: {
      span: {
        type: [ String, Number ],
        default: '1'
      },
      offset: {
        type: [String, Number],
        default: 0
      }
    },
    computed: {
      colStyle() {
        const { gutter } = this
        return { paddingLeft: gutter/2+'px', paddingRight: gutter/2 + 'px' }
      },
      colClass() {
        const { span, offset } = this
        return [ span && `col-${span}`, offset && `offset-${offset}` ]
      }
    },
    data(){
      return {
        gutter: 0
      }
    }
  }
</script>
<style lang="scss">
  .col {
    height: 200px;
    // width: 33%;
    background: gray;
    border: 10px solid green;

    $class-prefix: col-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} { 
        width: ($i/24) * 100%; 
      }
    }

    $offset-prefix: offset-;
    @for $i from 1 through 24 {
      &.#{$offset-prefix}#{$i} {
        margin-left: ($i/24)*100%;
      }
    }
  }

</style>
