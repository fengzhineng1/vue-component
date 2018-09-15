<template>
  <button class="g-button">按钮<slot></slot></button>
</template>
<script>
  export default {
    
  }
</script>
<style lang="scss">
  .g-button {
    margin: 10px;
    font-size: var(--font-size);
    padding: 0 1em;
    height: var(--button-heigth);
    border-radius: var(--border-radius);
    border: 1px solid #cccccc;

      &:active {
        border-color: var(--border-color-active);
        background-color: var(--bg-color-active);
      }

      &:hover {
        border-color: var(--border-color-hover);
      }

      &:focus {
        outline: none;
      }
  }


</style>
