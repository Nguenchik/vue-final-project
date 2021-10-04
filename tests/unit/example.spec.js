import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Form from '@/components/VForm'
import Test from '@/components/testComponent'
import FakeCalc from '@/components/FakeCalc'

const LocalVue = createLocalVue()
LocalVue.use(Vuex)

describe('Добавление данных в форму', () => {
  let fakeMutations
  let fakeStore
  beforeEach(() => {
    fakeMutations = {
      setNameOfMutation: jest.fn()
    }
    fakeStore = new Vuex.Store({
      mutations: fakeMutations
    })
  })

  test('Add', () => {
    const wrapper = mount(Form, {
      store: fakeStore,
      localVue: LocalVue
    })
    wrapper.find('button').trigger('click')
    expect(fakeMutations.setNameOfMutation).toHaveBeenCalled()
  })
})

describe('Описание теста', () => {
  test('Пункт', () => {
    // // eslint-disable-next-line no-unused-vars
    // let wrapper
    //
    // // eslint-disable-next-line no-unused-vars
    // const createComponent = () => {
    //   wrapper = mount(App)
    // }

    const wrapper2 = mount(Test, {
      propsData: {
        message: 'World'
      }
    })

    expect(wrapper2.text()).toContain('Hello World')
  })
  test('Пункт 2', () => {
    const wrapper2 = mount(Test, {
      propsData: {
        message: 'World'
      }
    })
    expect(wrapper2.text()).toEqual('Hello World')
  })

  test('Test3', () => {
    const wrapper = mount(FakeCalc)

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue('1')

    expect(wrapper.vm.operand1).toBe(1)
  })
  test('Получить сумму', () => {
    const wrapper = mount(FakeCalc)

    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue('10')
    const operand2Input = wrapper.find('input[name=operand2]')
    operand2Input.setValue('20')

    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(30)
  })
})
