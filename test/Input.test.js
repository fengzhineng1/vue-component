import Vue from 'vue'
import Input from '../src/input'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  describe('测试props:', () => {
    const cons = Vue.extend(Input)
    let vm;
    afterEach(() => {
      vm && vm.$destroy();
    })

    it('存在', () => {
      expect(Input).to.be.ok
    })

    it('value', () => {
      vm = new cons({
        propsData: {
          value: '测试'
        }
      }).$mount();

      const el = vm.$el.querySelector('input');
      expect(el.value).to.equal('测试');
    })

    it('disabled', () => {
      vm = new cons({
        propsData: {
          disabled: true
        }
      }).$mount()

      const el = vm.$el.querySelector('input')
      expect(el.disabled).to.equal(true);
    })

    it('readOnly', () => {
      vm = new cons({
        propsData: {
          readonly: true
        }
      }).$mount()

      const el = vm.$el.querySelector('input')
      expect(el.readOnly).to.equal(true)
    })

    

  })

});
