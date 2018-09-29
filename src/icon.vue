<template>
  <svg  class="icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>
<script>
  import '../svg'
  export default {
    props: {
      name: {
        type: String,
        default: 'setting'
      },
      score: {
        type: String,
        
      }
    }
  }
</script>
<style>
  .icon {
    height: 1em;
    width: 1em;
  }
</style>
