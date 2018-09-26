<template>
  <div class="toast" ref="toast">
    <slot></slot>
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
            isHtml: falses
          }
        }
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
