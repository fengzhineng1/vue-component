import Toast from './toast'

export default {
  install (Vue, options){
    Vue.prototype.$toast = (message, toastConfig, autoClose, autoCloseTime) => {
      const cons = Vue.extend(Toast)
      const vm = new cons({
        propsData: {
          autoClose,
          autoCloseTime,
          toastConfig: {
            text: '我是哈哈',
            toastCb: toastConfig.toastCb
          }
        }
      })

      vm.$slots.default = [toastConfig.text]
      const div = vm.$mount()
      document.body.appendChild(div.$el)
    }
  }
}
