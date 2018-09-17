<template>
  <button @click="$emit('click', 2)" class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon :name="name" v-if="name && !loading" class="icon"></g-icon>
    <g-icon name="loading" :class="{spin: true, icon: true}" v-if="loading"></g-icon>
    <div class="wrap-slot">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Vue from 'vue'
import Icon from './icon'

  export default {
   components: {
     'g-icon': Icon
   },
    props: {
      name: {
        type: String
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          if (value != 'left') {
            value = 'left'
          }
          return !!( value == 'left' || value == 'right' )
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
  }
</script>
<style lang="scss">
  @keyframes spin {
    0 {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  .g-button {
    vertical-align: middle;
    font-size: var(--font-size);
    padding: 0 1em;
    height: var(--button-heigth);
    border-radius: var(--border-radius);
    border: 1px solid #cccccc;
    display: inline-flex;
    justify-content: center;
    align-items: center;

      > .wrap-slot {
        order: 2;
      }

      > .icon {
        order: 1;
        margin-right: 2px;
      }

      &.icon-right {

        > .wrap-slot {
          order: 1;
        }

        > .icon {
          order: 2;
          margin-left: 2px;
          margin-right: none;
        }
      }

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

  .spin {
    animation: spin 1s infinite linear;
  }


</style>
