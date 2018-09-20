<template>
  <div  
    class="col" 
    :class="{ [`col-${span}`]: true, [`offset-${offset}`]: true }"
    :style="{ paddingLeft: gutter/2+'px', paddingRight: gutter/2 + 'px' }"
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
    border: 1px solid #ccc;

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
