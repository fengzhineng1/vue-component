<template>
  <div class="wrap">
    <input  
      @input="$emit('input', 'hi')" 
      @change="$emit('change', 'hi')" 
      @focus="$emit('focus', 'hi')"
      @blur="$emit('blur', 'hi')"
      :disabled="disabled"  
      :readonly="readonly" 
      :class="{ disabled, readonly, error: errorMessage }" 
      v-model="message"
    />
    <template class="error" v-if="errorMessage">
      <Icon name="error" class="icon-error error"></Icon>
      <span class="errorMessage">{{ errorMessage }}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    components: {
      Icon
    },
    name: 'f-input',
    props: {
      disabled: {
        default: false,
        type: Boolean
      },
      readonly: {
        default: false,
        type: Boolean
      },
      errorMessage: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  $eHeight: 28px;
  $eBorderColor: #ccc;
  $eShdowColor: rgba(0,0,0,0.5);
  $disabledColor: #999999;
  $eFontSize: 12px;
  $errorColor: red;

  .wrap {
    margin: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    > input {
      display: inline;
      height: $eHeight;
      border: 1px solid $eBorderColor;
      border-radius: 4px;
      padding: 5px;

      &:hover {
        border-color: #666;
      }

      &:focus {
        outline: none;
        box-shadow: inset 1px 1px 1px $eShdowColor;
      }

      &.disabled {
        border: 1px solid $disabledColor;
        background-color: $disabledColor;
        curor: pointer;
      }

      &.readonly {
        border: 1px solid $disabledColor;
        background-color: $disabledColor;
        curor: pointer;
      }

      &.error {
        border: 1px solid $errorColor;
      }
    }

    .error {
      color: $errorColor;
      font-size: $eFontSize;

      &:not(:last-child){
        margin-right: 3px;
      }
    } 

    .errorMessage {
      color: $errorColor;
      font-size: $eFontSize;
    }

    .icon-error {
      fill: $errorColor;
    }
  }
</style>
