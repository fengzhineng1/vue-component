import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import GroupBtn from './groupBtn'
import Input from './Input'
import Row from './row'
import Col from './col'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('group-btn', GroupBtn);
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

let vm = new Vue({
  el: '#el',
  name: 'name',
  data(){
    return {
      name: '123',
      isLoading: false,
      isLoading1: false,
      isLoading2: false,
      message: 'test'
    }

  },
  created(){
  },
  methods: {
    created() {

    },
    changeLoadingState(e){
      return !this.isLoading1
    },
    changeInput(e){
      console.log('e', e)
    },
    onInput(e){
      console.log('e', e)
    },
    onFocus(e){
      console.log('e', e)
    },
    onBlur(e){
      console.log('e', e)
    }
  }
})

import chai from 'chai'
import spies  from 'chai-spies'

chai.use(spies);

const expect = chai.expect

{
  /* 如何实例化一个对象 */
  let cons = Vue.extend(Button);
  let btn = new cons({
    propsData: {
      name: 'xia'
    }
  })

  btn.$mount('#test');
  let useEl = btn.$el.querySelector('use');
  expect(useEl.getAttribute('xlink:href')).to.equal('#i-xia');
  btn.$el.remove();
  btn.$destroy();
}

{
  /* 测试按钮在左边 */
  let cons1 = Vue.extend(Button);
  let el = document.createElement('p');
  document.body.appendChild(el)
  let btn1 = new cons1({
    propsData: {
      name: 'xia'
    }
  })
    
  btn1.$mount(el);
  let svgEl = btn1.$el.querySelector('svg');
  let { order } = getComputedStyle(svgEl);

  expect(order).to.equal('1');
  btn1.$el.remove();
  btn1.$destroy();
}

{
  /* 测试按钮在右边 */
  let cons1 = Vue.extend(Button);
  let el = document.createElement('p');
  document.body.appendChild(el)
  let btn1 = new cons1({
    propsData: {
      name: 'xia',
      iconPosition: 'right'
    }
  })
    
  btn1.$mount(el);
  let svgEl = btn1.$el.querySelector('svg');
  let { order } = getComputedStyle(svgEl);

  expect(order).to.equal('2');

  btn1.$el.remove();
  btn1.$destroy();
}

{
  const should = chai.should()
  , expect = chai.expect;

  const btn = Vue.extend(Button);
  const cons = new btn({
    propsData: {
      name: 'xia'
    }
  }).$mount();

  const ee = cons.$el
  const spy = chai.spy(() => {});

  // then use in place of original
  ee.addEventListener('click', spy);
  ee.click();
  expect(spy).to.have.been.called();
}

{
  /* loading是true */
  /* 将对象转换成构造函数 */
  const el = document.createElement('div');
  document.body.appendChild(el);

  const btn = Vue.extend(Button);
  const cons = new btn({
    propsData: {
      name: 'loading',
      loading: true
    }
  }).$mount(el);

  // btn.$mount(el);
  const useEl = cons.$el.querySelector('use');
  expect(useEl.getAttribute('xlink:href')).to.equal('#i-loading')

  cons.$el.remove();
  cons.$destroy();
}
