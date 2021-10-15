<template>
  <div>
    <p>Результат: {{ result }}</p>
    <div class="inputs">
      <label for="operand1">Первое число
        <input id="operand1" v-model.number="operand1" class="operand1"
               data-test="operand1"
               name="operand1"
               placeholder="0"
               type="text"
               v-bind:disabled="radio !== 'first' "
               value="Первое число"></label>
      <label for="operand2">Второе число
        <input
          id="operand2"
          v-model.number="operand2"
          name="operand2"
          placeholder="0"
          type="text"
          v-bind:disabled="radio !== 'Второе число'"></label>
    </div>
    <div class="buttons">
      <button v-for="operator in operators" :key="operator" :name="operator"
              class="btn"
              v-bind:disabled="operand1 === '' || operand2 === ''" @click="calculate(operator)">{{ operator }}
      </button>
    </div>
    <div><label for="check"><input id="check" v-model="checked" type="checkbox">Показать/Скрыть экранную клавиатуру</label></div>

    <div v-show="checked" class="keyboard">
      <button v-for="(numb,index) in numberKeyboard"
              :key="index"
              :name="numb"
              class="btn"
              @click="getNumb(numb)"
      >{{ numb }}
      </button>
    </div>
    <div>
      <label for="radio1">
        first
        <input id="radio1" v-model="radio" name="radio1" type="radio" value="first">
      </label>
      <label for="radio2">second
        <input id="radio2" v-model="radio" name="radio2" type="radio" value="second">
      </label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      operand1: '',
      operand2: '',
      result: '',
      operators: [
        '+',
        '-',
        '*',
        '/',
        'Целочисленное деление',
        'Возведение в степень'
      ],
      numberKeyboard: [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '←'
      ],
      checked: true,
      radio: 'first'
    }
  },
  methods: {
    plus () {
      this.result = Number(this.operand1) + Number(this.operand2)
    },
    minus () {
      this.result = this.operand1 - this.operand2
    },
    multiplication () {
      this.result = this.operand1 * this.operand2
    },
    division () {
      if (this.operand2 !== '0') {
        this.result = (this.operand1 / this.operand2)
      } else {
        console.error('Делить на 0 нельзя!')
      }
    },
    exponentiation () {
      this.result = this.operand1 ** this.operand2
    },
    integerDivision () {
      if (this.operand2 !== '0' && this.operand1 / this.operand2 >= 0) {
        this.result = Math.floor(this.operand1 / this.operand2)
      } else if (this.operand2 !== '0' && this.operand1 / this.operand2 <= 0) {
        this.result = Math.ceil(this.operand1 / this.operand2)
      } else if (this.operand2 === '0') {
        alert('Делить на 0 нельзя!')
      }
    },
    calculate (operation = '+') {
      switch (operation) {
        case '+':
          this.plus()
          break
        case '-':
          this.minus()
          break
        case '*':
          this.multiplication()
          break
        case '/':
          this.division()
          break
        case 'Возведение в степень':
          this.exponentiation()
          break
        case 'Целочисленное деление':
          this.integerDivision()
          break
      }
    },
    getNumb (numb) {
      if (this.radio === 'first' && numb !== '←') {
        this.operand1 = String(this.operand1 + numb)
      } else if (this.radio === 'second' && numb !== '←') {
        this.operand2 = String(this.operand2 + numb)
      } else if (numb === '←' && this.radio === 'first') {
        this.operand1 = String(this.operand1).slice(0, -1)
      } else if (numb === '←' && this.radio === 'second') {
        this.operand2 = String(this.operand2).slice(0, -1)
      }
    }
  }
}
</script>

<style scoped>
.inputs {
  margin-bottom: 20px;
}

.operand1 {
  margin-right: 20px;
}

.btn {
  padding: 10px;
  margin-right: 7px;
  margin-top: 20px;
  margin-bottom: 10px;
}

input {
  color: green;
  font-size: 20px;
  font-weight: bold;
  width: 100px;
  text-align: center;
}
</style>
