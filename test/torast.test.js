  
import Vue from 'vue'
import Toast from '../src/toast'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
      expect(Toast).to.be.ok
  })


  describe('test props', () => {
    const cons = Vue.extend(Toast)
    let vm;

    afterEach(() => {
      vm.$destroy()
    })

    it('props message', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new cons({
        propsData: {
          message: 'test'
        }
      }).$mount(div)
      // console.log('vm:', vm.$el)
      // const useElement = vm.$el.querySelector('div')
      // console.log('useElement:', useElement)
      // expect(useElement.innerText.to.equal('test'))
    })

  })

})
