const display = document.querySelector(".display");

const oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", () => {
  let disNum = 0;
  if (!isOperating) {
    numSet.push(1);
    number = parseFloat(numSet.join(""));
    disNum = number;
  } else {
    numSet2.push(1);
    number2 = parseFloat(numSet2.join(""));
    disNum = number2;
  }
  display.innerText = disNum;
});
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
// });

const add = () => number + number2;

let isOperating = false;
let lastOperator = null;
let firstTerm = false;

const numSet = [];
const numSet2 = [];
let number = null;
let number2 = null;
