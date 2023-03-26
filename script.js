const add = () => parseFloat(number) + parseFloat(number2);
const subtract = () => number - number2;
const multiply = () => number * number2;
const divide = () => number / number2;

let isOperating = false;
let lastOperator = null;
let number = "";
let number2 = "";

function operate() {
  if (lastOperator == null || number2 == "") return;
  console.log(number);
  number2 == 0 && lastOperator == divide
    ? (display.innerText = "LOL")
    : (display.innerText = lastOperator());
  number = lastOperator();
  number2 = "";
  lastOperator = null;
}

function getNumber(num) {
  if (display.innerText.length > 20) return;
  if (!isOperating) {
    number = `${number}${num}`;
    display.innerText = number;
  } else {
    number2 = `${number2}${num}`;
    display.innerText = number2;
  }
}

const display = document.querySelector(".display p");

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
delBtn.addEventListener("click", () => {
  if (!isOperating) {
    console.log("asdf");
    display.innerText = display.innerText.slice(0, -1);
    number = display.innerText;
  } else {
    console.log("qwer");
    display.innerText = display.innerText.slice(0, -1);
    number2 = display.innerText;
  }
});

const percentBtn = document.querySelector(".percent");
percentBtn.addEventListener("click", () => {
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
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  number = "";
  number2 = "";
  isOperating = false;
  lastOperator = null;
  display.innerText = "";
});

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
