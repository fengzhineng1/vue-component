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
  let validator = (value) => {
    let val = false
    Object.keys(value).forEach(v => {
      if (['span', 'offset'].includes(v)) {
        val = true
      }
    })
    return val
  }

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
      },
      xs: {
        type: Object,
        validator
      },
      sm: {
        type: Object,
        validator
      },    
      md: {
        type: Object,
        validator
      },
      lg: {
        type: Object,
        validator
      },
      xl: {
        type: Object,
        validator
      }      
    },
    methods: {
      addColClass(obj, name) {
        const array = []
        if (obj && obj.span) {
          array.push(`${name}-span-${obj.span}`)
        }

        if (obj && obj.offset) {
          array.push(`${name}-offset-${obj.offset}`)
        }
        return array
      }
    },
    computed: {
      colStyle() {
        const { gutter } = this
        return { paddingLeft: gutter/2+'px', paddingRight: gutter/2 + 'px' }
      },
      colClass() {
        const { 
          span, 
          offset,
          xs, 
          sm,
          md,
          lg,
          xl
        } = this

        return [ 
          span && `col-${span}`, 
          offset && `offset-${offset}`,
          ...addColClass(sm, 'sm'),
          ...addColClass(xs, 'xs'),
          ...addColClass(md, 'md'),
          ...addColClass(lg, 'lg'),
          ...addColClass(xl, 'xl'),
        ]
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

    @media (max-width: 576px) {
      $span-prefix: xs-span-;
      @for $i from 1 through 24 {
        &.#{$span-prefix}#{$i} {
          width: ($i/24) * 100%; 
        }
      }

      $offset-prefix: xs-offset-;
      @for $i from 1 through 24 {
        &.#{$offset-prefix}#{$i} {
          margin-left: ( $i/24 )*100%;
        }
      }
    }

    @media (min-width: 576px) {
      $span-prefix: sm-span-;
      @for $i from 1 through 24 {
        &.#{$span-prefix}#{$i} {
          width: ($i/24) * 100%; 
        }
      }

      $offset-prefix: sm-offset-;
      @for $i from 1 through 24 {
        &.#{$offset-prefix}#{$i} {
          margin-left: ( $i/24 )*100%;
        }
      }
    }

    @media (min-width: 768px) {
      $span-prefix: md-span-;
      @for $i from 1 through 24 {
        &.#{$span-prefix}#{$i} {
          width: ($i/24) * 100%; 
        }
      }

      $offset-prefix: md-offset-;
      @for $i from 1 through 24 {
        &.#{$offset-prefix}#{$i} {
          margin-left: ( $i/24 )*100%;
        }
      }
    }

    @media (min-width: 992px) {
      $span-prefix: lg-span-;
      @for $i from 1 through 24 {
        &.#{$span-prefix}#{$i} {
          width: ($i/24) * 100%; 
        }
      }

      $offset-prefix: lg-offset-;
      @for $i from 1 through 24 {
        &.#{$offset-prefix}#{$i} {
          margin-left: ( $i/24 )*100%;
        }
      }
    }

    @media (min-width: 1200px) {
      $span-prefix: xl-span-;
      @for $i from 1 through 24 {
        &.#{$span-prefix}#{$i} {
          width: ($i/24) * 100%; 
        }
      }

      $offset-prefix: xl-offset-;
      @for $i from 1 through 24 {
        &.#{$offset-prefix}#{$i} {
          margin-left: ( $i/24 )*100%;
        }
      }
    }

  }

</style>
