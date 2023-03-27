const maxDigit = 15; //digits displayed
const colorChangeTimer = 200; //millisecond
const display = document.querySelector(".display p");

//********************************** */
//            EVENT LISTENERS
//********************************** */

const numKeys = document.querySelectorAll(".num");
numKeys.forEach((element) => {
  element.addEventListener("click", (e) => handleNumbers(e.target.textContent));
});

const operatorKeys = document.querySelectorAll(".operator");
operatorKeys.forEach((e) => {
  e.addEventListener("click", (e) => handleOperator(e.target.textContent));
});

const periodBtn = document.querySelector(".period");
periodBtn.addEventListener("click", () => {
  if (display.textContent.includes(".")) return;
  handleNumbers(".");
});

const percentBtn = document.querySelector(".percent");
percentBtn.addEventListener("click", percent);

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", equalCheck);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const delBtn = document.querySelector(".del");
delBtn.addEventListener("click", del);

const posNegBtn = document.querySelector(".pos-neg");
posNegBtn.addEventListener("click", posNeg);

//********************************** */
//              OPERATIONS
//********************************** */
let previousNum = "";
let currentNum = "";
let operator = "";
let equalOperator = false;

function handleNumbers(number) {
  if (equalOperator) {
    lastOperator = "";
    previousNum = "";
    equalOperator = false;
  }
  if (operator == "") {
    if (previousNum.length > maxDigit) return;
    previousNum += number;
    display.textContent = previousNum;
  } else {
    if (currentNum.length > maxDigit) return;
    currentNum += number;
    display.textContent = currentNum;
  }
}

function equalCheck() {
  equalOperator = true;
  calculate();
  operator = "";
}

function del() {
  if (display.textContent == previousNum) {
    previousNum = previousNum.slice(0, -1);
    display.textContent = previousNum;
  } else {
    currentNum = currentNum.slice(0, -1);
    display.textContent = currentNum;
  }
}

function clear() {
  display.textContent = "";
  previousNum = "";
  currentNum = "";
  operator = "";
  equalOperator = false;
}

function handleOperator(op) {
  operator = op;
  equalOperator = false;
  if (previousNum != "" || currentNum != "") calculate();
}

function posNeg() {
  if (display.textContent == "") return;
  if (display.textContent == previousNum) {
    previousNum = previousNum * -1;
    previousNum = previousNum.toString();
    display.textContent = previousNum;
  } else {
    currentNum = currentNum * -1;
    currentNum = currentNum.toString();
    display.textContent = currentNum;
  }
}

function percent() {
  if (display.innerText == "") return;
  let num = Number(display.textContent);
  operator == "*"
    ? (num = previousNum * (currentNum / 100))
    : operator == "/"
    ? (num = previousNum / (currentNum / 100))
    : operator == "+"
    ? (num = Number(previousNum) + Number(previousNum * (currentNum / 100)))
    : operator == "-"
    ? (num = previousNum - previousNum * (currentNum / 100))
    : (num = num / 100);
  previousNum = num.toString();
  display.textContent = previousNum;
  currentNum = "";
  operator = "";
  equalOperator = true;
}

function calculate() {
  if (operator == "" || currentNum == "") return;
  operator === "+"
    ? (previousNum = Number(previousNum) + Number(currentNum))
    : operator === "-"
    ? (previousNum = previousNum - currentNum)
    : operator === "*"
    ? (previousNum = previousNum * currentNum)
    : (previousNum = previousNum / currentNum);
  currentNum = "";
  previousNum = previousNum.toString();
  display.textContent = previousNum;
}

//********************************** */
//          COLORS & SOUNDS
//********************************** */

const allBtn = document.querySelectorAll(".btn");
allBtn.forEach((element) => {
  element.addEventListener("click", () => {
    playSound();
    element.classList.add("clicked");
    window.setTimeout(
      () => element.classList.remove("clicked"),
      colorChangeTimer
    );
  });
});

function playSound() {
  const typeSound = document.querySelector("#type-sound");
  if (!typeSound) return;
  typeSound.currentTime = 0;
  typeSound.play();
}

function keyPressedColor(str) {
  playSound();
  const key = document.querySelector(`${str}`);
  key.classList.add("clicked");
  window.setTimeout(() => key.classList.remove("clicked"), colorChangeTimer);
}

document.addEventListener("keydown", (e) => {
  if (e.key > 0 && e.key <= 9) {
    handleNumbers(e.key);
    e.key == 1
      ? keyPressedColor(".one")
      : e.key == 2
      ? keyPressedColor(".two")
      : e.key == 3
      ? keyPressedColor(".three")
      : e.key == 4
      ? keyPressedColor(".four")
      : e.key == 5
      ? keyPressedColor(".five")
      : e.key == 6
      ? keyPressedColor(".six")
      : e.key == 7
      ? keyPressedColor(".seven")
      : e.key == 8
      ? keyPressedColor(".eight")
      : keyPressedColor(".nine");
  } else if (e.key === "0") {
    handleNumbers(0);
    keyPressedColor(".zero");
  } else if (e.key === ".") {
    keyPressedColor(".period");
    if (display.textContent.includes(".")) return;
    handleNumbers(".");
  } else if (e.key === "c" || e.key === "C") {
    keyPressedColor(".clear");
    clear();
  } else if (e.key === "Backspace") {
    keyPressedColor(".del");
    del();
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    handleOperator(e.key);
    e.key == "+"
      ? keyPressedColor(".add")
      : e.key == "-"
      ? keyPressedColor(".subtract")
      : e.key == "*"
      ? keyPressedColor(".multiply")
      : keyPressedColor(".divide");
  } else if (e.key === "=" || e.key === "Enter") {
    keyPressedColor(".equal");
    equalCheck();
  } else if (e.key === "%") {
    keyPressedColor(".percent");
    percent();
  } else if (e.key === " ") {
    keyPressedColor(".pos-neg");
    posNeg();
  }
});
