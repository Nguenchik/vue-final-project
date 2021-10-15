/* eslint-disable quote-props */
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Calculator from '@/components/Calculator.vue'
import Pages from '@/components/VPage.vue'
import StubCategoryList from './stubs/stubCategoryList.json'

const LocalVue = createLocalVue()
LocalVue.use(Vuex)

describe('Calculator operators', () => {
  let wrapper

  const createComponent = () => {
    wrapper = mount(Calculator)
  }
  // мы должны искать так как бы искал пользователь. Стили про стилизацию^ использовать плохо
  const findButtonByText = (text) =>
    wrapper.findAll('button').wrappers.find(w => {
      return w.text() === text
    })
  const findLabelText = (text) =>
    wrapper.findAll('label').wrappers.find(w => {
      return w.text() === text
    })

  afterEach(() => {
    wrapper.destroy()
  })
  // it-это алиас test https://jestjs.io/docs/api#testname-fn-timeout
  test('Ввод данных', () => {
    createComponent()
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('10')
    expect(wrapper.vm.operand1).toBe(10)
  })
  it('Удаление символа', async () => {
    createComponent()
    const operand1 = wrapper.find('[data-test=operand1]')
    await operand1.setValue('10')
    await findButtonByText('←').trigger('click')
    expect(wrapper.vm.operand1).toBe('1')
  })

  it('Клавиатура показана', async () => {
    createComponent()
    expect(wrapper.vm.checked).toBe(true)
  })
  it('Клавиатура скрывается', async () => {
    createComponent()
    await findLabelText('Показать/Скрыть экранную клавиатуру').trigger('click')
    expect(wrapper.vm.checked).toBe(false)
  })

  it.each`
  firstNumber | secondNumber | operator  | expectedResult
  ${'3'} | ${'2'} | ${'+'} | ${5}
  ${'7'} | ${'2'} | ${'-'} | ${5}
  ${'4'} | ${'2'} | ${'/'} | ${2}
  ${'8'} | ${'2'} | ${'*'} | ${16}
  `('Проверка оператора "$operator" с числами $firstNumber и $secondNumber',
    async ({ firstNumber, secondNumber, operator, expectedResult }) => {
      createComponent()
      // так делать плохо
      // wrapper.vm.radio = 'first'
      await findLabelText('first').trigger('click')
      await findButtonByText(firstNumber).trigger('click')
      // так делать плохо
      // wrapper.vm.radio = 'second'
      await findLabelText('second').trigger('click')
      await findButtonByText(secondNumber).trigger('click')

      await findButtonByText(operator).trigger('click')
      expect(wrapper.vm.result).toBe(expectedResult)
    })
})

describe('Vuex', () => {
  let wrapper

  let fakeMutations, fakeStore, state
  beforeEach(() => {
    fakeMutations = {
      setNameOfMutation: jest.fn()
    }
    state = {
      categoryList2: () => []
    }
    fakeStore = new Vuex.Store({
      mutations: fakeMutations,
      state
    })
  })
  const createComponent = () => {
    wrapper = mount(Pages, {
      store: fakeStore,
      localVue: LocalVue,
      computed: {
        categoryList2: () => StubCategoryList.data
      }
    })
  }
  afterEach(() => {
    wrapper.destroy()
  })
  test('Расчет количества страниц', async () => {
    createComponent()
    const pageCount = wrapper.findAll('[data-test=page]').wrappers.length
    expect(pageCount === wrapper.vm.pages).toBe(true)
  })
})
