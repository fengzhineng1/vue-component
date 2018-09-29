<template>
  <div>
    {{ content }}
    <slot></slot>
  </div>

</template>
<script>
import Vue from 'vue'
  export default {
    props: {
      content: {
        type: [ String, Number ]
      },
      selected: {
        type: String
      }     
    },
    created() {
      // this.eventBus.$emit('selected', this.selected)
    },
    mounted() {
      this.$children.forEach(vm => {
        console.log(vm)
        if (vm.$options.name === 'g-tab-head') {
          vm.$children.forEach(item => {
            console.log(item.name)
            
            if (item.name === this.selected) {
              console.log(1)
              this.eventBus.$emit('selected', this.selected, item)
            }            
          })
        }
      })
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        foo: this.eventBus
      } 
    }
  }
</script>
<style lang="scss">
  
</style>
