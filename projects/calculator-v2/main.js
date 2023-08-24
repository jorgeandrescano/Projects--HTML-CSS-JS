const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.querySelector("[data-equal]");
const resetBtn = document.querySelector("[data-reset]");
const clearElBtn = document.querySelector("[data-clearEl]");
const topValueText = document.querySelector("[data-topValue]");
const botValueText = document.querySelector("[data-bottomValue]");

class Calculator {
  constructor(botValueText, topValueText) {
    this.botValueText = botValueText;
    this.topValueText = topValueText;
    this.botValue = "";
    this.topValue = "";
    this.operator = "";
  }

  addNumber(number) {
    if (number === "." && this.botValue.includes(".")) return;
    this.botValue = this.botValue + number;
    //this.topValue = 0
  }
  printDisplay() {
    this.botValueText.innerText = this.botValue;
    this.topValueText.innerText = this.topValue + this.operator;
  }
  clearEl() {
    this.botValue = this.botValue.slice(0, -1);
  }
  selectOperation(operator) {
    if (this.botValue == "") return;
    if (this.topValue != "") {
      this.makeCalculation();
    }
    this.operator = operator;
    this.topValue = this.botValue;
    this.botValue = "";
  }
  makeCalculation() {
    let result;
    let convertTopValue = parseFloat(this.topValue);
    let convertBotValue = parseFloat(this.botValue);
    if (isNaN(convertTopValue) || isNaN(convertBotValue)) return;
    switch (this.operator) {
      case "+":
        result = convertTopValue + convertBotValue;
        break;
      case "-":
        result = convertTopValue - convertBotValue;
        break;
      case "x":
        result = convertTopValue * convertBotValue;
        break;
      case "÷":
        if (convertBotValue === 0) {
          result = "Error... NaN";
        } else {
          result = convertTopValue / convertBotValue;
        }
        break;
      case "%":
        result = (convertTopValue * convertBotValue) / 100;
        break;
      default:
        return;
    }
    this.botValue = result;
    this.operator = "";
    this.topValue = "";
  }
  cleanScreen() {
    this.botValue = "";
    this.topValue = "";
    this.operator = "";
  }
}

const calculator = new Calculator(botValueText, topValueText);

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.addNumber(btn.innerText);
    calculator.printDisplay();
  });
});

clearElBtn.addEventListener("click", () => {
  calculator.clearEl();
  calculator.printDisplay();
});

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.selectOperation(btn.innerText);
    calculator.printDisplay();
  });
});

equalBtn.addEventListener("click", () => {
  calculator.makeCalculation();
  calculator.printDisplay();
});

resetBtn.addEventListener("click", () => {
  calculator.cleanScreen();
  calculator.printDisplay();
});
