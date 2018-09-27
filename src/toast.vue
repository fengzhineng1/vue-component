<template>
  <div class="toast" :class="[ `position-${toastPosition}` ]" ref="toast">
    <div v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
    
    <span @click="closeToast" class="close">{{ toastConfig.text }}</span>
  </div>
</template>
<script>
  export default {
    props: {
      message: {
        type: String
      },
      autoClose: {
        type: Boolean,
        default: false
      },
      autoCloseTime: {
        type: [ Number, String ],
        default: 3
      },
      toastConfig: {
        type: Object,
        default(){
          return {
            text: '默认文案',
            closeCb(){
              
            },
            isHtml: false
          }
        }
      },
      toastPosition: {
        type: String,
        default: 'bottom'
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.closeToast()
          
        }, this.autoCloseTime * 1000)
      }

      this.$nextTick(() => {
        this.$refs.line.style.height = this.$refs.toast.clientHeight+'px';
      })
    },
    methods: {
      closeToast(){
        this.$el.remove()
        this.$destroy()
        this.toastConfig.toastCb()
      }
    }
  }
</script>
<style lang="scss">
  .toast {
    display: inline-flex;
    align-items: center;
    background-color: #424242;
    min-height: 40px;
    padding: 0 10px;
    color: white;
    border-radius: 4px;
    line-height: 1.8;
    //justify-content: flex-start;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    &.position-middle {
      top: 50%;
      transform: translateY(-50%);
    }

    &.position-top {
      top: 0;
    }

    &.position-bottom {
      bottom: 0;
    }

    > .close {
      flex-shrink: 0;
      padding-left: 15px;
    }

    > .line {
      height: 100%;
      border-right: 1px solid #666;
      margin-left: 16px;
    }
  }


</style>
