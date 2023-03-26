const maxDigit = 20; //digits displayed
const colorChangeTimer = 200; //millisecond
const display = document.querySelector(".display p");

//************************ */
//      Math Operations
//************************ */
let isOperating = false;
let lastOperator = null;
let number = "";
let number2 = "";

const add = () => parseFloat(number) + parseFloat(number2);
const subtract = () => number - number2;
const multiply = () => number * number2;
const divide = () => number / number2;
const percent = () => {
  if (display.innerText == "") return;
  lastOperator == multiply
    ? (display.innerText = number * (number2 / 100))
    : lastOperator == divide
    ? (display.innerText = number / (number2 / 100))
    : lastOperator == add
    ? (display.innerText =
        parseFloat(number) + parseFloat(number * (number2 / 100)))
    : lastOperator == subtract
    ? (display.innerText = number - number * (number2 / 100))
    : (display.innerText = display.innerText / 100);
  number = display.innerText;
  number2 = "";
};
const del = () => {
  if (!isOperating) {
    display.innerText = display.innerText.slice(0, -1);
    number = display.innerText;
  } else {
    display.innerText = display.innerText.slice(0, -1);
    number2 = display.innerText;
  }
};

const clear = () => {
  number = "";
  number2 = "";
  isOperating = false;
  lastOperator = null;
  display.innerText = "";
};

function operate() {
  if (lastOperator == null || number2 == "") return;
  number2 == 0 && lastOperator == divide
    ? (display.innerText = "L0L")
    : (display.innerText = lastOperator());
  number = lastOperator();
  number2 = "";
  lastOperator = null;
}

function getNumber(num) {
  if (!isOperating) {
    if (number.length > maxDigit) return;
    number = `${number}${num}`;
    display.innerText = number;
  } else {
    if (number2.length > maxDigit) return;
    number2 = `${number2}${num}`;
    display.innerText = number2;
  }
}

//******************************* */
//        Click Event Listeners
//******************************* */

const oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", () => getNumber(1));

const twoBtn = document.querySelector(".two");
twoBtn.addEventListener("click", () => getNumber(2));

const threeBtn = document.querySelector(".three");
threeBtn.addEventListener("click", () => getNumber(3));

const fourBtn = document.querySelector(".four");
fourBtn.addEventListener("click", () => getNumber(4));

const fiveBtn = document.querySelector(".five");
fiveBtn.addEventListener("click", () => getNumber(5));

const sixBtn = document.querySelector(".six");
sixBtn.addEventListener("click", () => getNumber(6));

const sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", () => getNumber(7));

const eightBtn = document.querySelector(".eight");
eightBtn.addEventListener("click", () => getNumber(8));

const nineBtn = document.querySelector(".nine");
nineBtn.addEventListener("click", () => getNumber(9));

const zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", () => getNumber(0));

const periodBtn = document.querySelector(".period");
periodBtn.addEventListener("click", () => {
  if (display.innerText.includes(".")) return;
  getNumber(".");
});

const delBtn = document.querySelector(".del");
delBtn.addEventListener("click", del);

const percentBtn = document.querySelector(".percent");
percentBtn.addEventListener("click", percent);

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  if (isOperating) operate();
  isOperating = true;
  lastOperator = add;
});

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", () => {
  if (isOperating) operate();
  isOperating = true;
  lastOperator = subtract;
});

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", () => {
  if (isOperating) operate();
  isOperating = true;
  lastOperator = multiply;
});

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", () => {
  if (isOperating) operate();
  isOperating = true;
  lastOperator = divide;
});

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
  isOperating = false;
  operate();
});

//*********************** */
//      Color & Sounds
//*********************** */

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

function keyPressedColor(key) {
  if (key == 1) {
    playSound();
    oneBtn.classList.add("clicked");
    window.setTimeout(
      () => oneBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 2) {
    playSound();
    twoBtn.classList.add("clicked");
    window.setTimeout(
      () => twoBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 3) {
    playSound();
    threeBtn.classList.add("clicked");
    window.setTimeout(
      () => threeBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 4) {
    playSound();
    fourBtn.classList.add("clicked");
    window.setTimeout(
      () => fourBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 5) {
    playSound();
    fiveBtn.classList.add("clicked");
    window.setTimeout(
      () => fiveBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 6) {
    playSound();
    sixBtn.classList.add("clicked");
    window.setTimeout(
      () => sixBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 7) {
    playSound();
    sevenBtn.classList.add("clicked");
    window.setTimeout(
      () => sevenBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 8) {
    playSound();
    eightBtn.classList.add("clicked");
    window.setTimeout(
      () => eightBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 9) {
    playSound();
    nineBtn.classList.add("clicked");
    window.setTimeout(
      () => nineBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == 0) {
    playSound();
    zeroBtn.classList.add("clicked");
    window.setTimeout(
      () => zeroBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == ".") {
    playSound();
    periodBtn.classList.add("clicked");
    window.setTimeout(
      () => periodBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == "+") {
    playSound();
    addBtn.classList.add("clicked");
    window.setTimeout(
      () => addBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == "-") {
    playSound();
    subtractBtn.classList.add("clicked");
    window.setTimeout(
      () => subtractBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == "*") {
    playSound();
    multiplyBtn.classList.add("clicked");
    window.setTimeout(
      () => multiplyBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == "/") {
    playSound();
    divideBtn.classList.add("clicked");
    window.setTimeout(
      () => divideBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == "%") {
    playSound();
    percentBtn.classList.add("clicked");
    window.setTimeout(
      () => percentBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == "c" || key == "C") {
    playSound();
    clearBtn.classList.add("clicked");
    window.setTimeout(
      () => clearBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == "Backspace") {
    playSound();
    delBtn.classList.add("clicked");
    window.setTimeout(
      () => delBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  } else if (key == "=") {
    playSound();
    equalBtn.classList.add("clicked");
    window.setTimeout(
      () => equalBtn.classList.remove("clicked"),
      colorChangeTimer
    );
  }
}

window.addEventListener("keydown", (key) => {
  keyPressedColor(key.key);
  if (
    key.key == 1 ||
    key.key == 2 ||
    key.key == 3 ||
    key.key == 4 ||
    key.key == 5 ||
    key.key == 6 ||
    key.key == 7 ||
    key.key == 8 ||
    key.key == 9
  ) {
    getNumber(key.key);
  } else if (key.key == 0) {
    getNumber(0);
  } else if (key.key == ".") {
    if (display.innerText.includes(".")) return;
    getNumber(".");
  } else if (key.key == "+") {
    if (isOperating) operate();
    isOperating = true;
    lastOperator = add;
  } else if (key.key == "-") {
    if (isOperating) operate();
    isOperating = true;
    lastOperator = subtract;
  } else if (key.key == "*") {
    if (isOperating) operate();
    isOperating = true;
    lastOperator = multiply;
  } else if (key.key == "/") {
    if (isOperating) operate();
    isOperating = true;
    lastOperator = divide;
  } else if (key.key == "=") {
    if (isOperating) operate();
    isOperating = false;
    lastOperator = null;
  } else if (key.key == "%") {
    percent();
  } else if (key.key == "Backspace") {
    del();
  } else if (key.key == "c" || key.key == "C") {
    clear();
  }
});

// const operate = () => {
//   if (lastOperator == null || number2 == null) return;
//   disNum = lastOperator();
//   number = disNum;
//   numSet2 = [];
//   number2 = null;
//   display.innerText = disNum;
//   console.log(lastOperator);
// };

// ********** OLD **************
// function setNumber(num) {
//   if (numSet.length > 20) {
//     numSet.pop();
//     return;
//   }
//   if (numSet2.length > 20) {
//     numSet2.pop();
//     return;
//   }
//   if (!isOperating) {
//     numSet.push(num);
//     number = numSet.join("");
//     disNum = number;
//   } else {
//     numSet2.push(num);
//     number2 = numSet2.join("");
//     disNum = number2;
//   }
//   display.innerText = disNum;
// }

// const oneBtn = document.querySelector(".one");
// oneBtn.addEventListener("click", () =>
//   !isOperating ? numSet.push(1) : numSet2.push(1)
// );

// const twoBtn = document.querySelector(".two");
// twoBtn.addEventListener("click", () =>
//   !isOperating ? numSet.push(2) : numSet2.push(2)
// );

// const threeBtn = document.querySelector(".three");
// threeBtn.addEventListener("click", () =>
//   !isOperating ? numSet.push(3) : numSet2.push(3)
// );

// const addBtn = document.querySelector(".add");
// addBtn.addEventListener("click", () => {
//   isOperating = true;
//   lastOperator = add;
//   if (firstTerm) {
//     number = parseInt(numSet.join(""));
//     console.log(number);
//   } else {
//     number2 = parseInt(numSet2.join(""));
//     console.log(number2);
//   }
// })
