import Toast from './toast'

export default {
  install (Vue, options){
    Vue.prototype.$toast = (message, toastConfig, toastPosition, autoClose, autoCloseTime) => {
      const cons = Vue.extend(Toast)
      const vm = new cons({
        propsData: {
          autoClose,
          autoCloseTime,
          toastConfig,
          toastPosition
        }
      })
      vm.$slots.default = [message]
      const div = vm.$mount()
      document.body.appendChild(div.$el)
    }
  }
}
