/* // @ Question 1
function operations(num1, num2, choice) {
  if (operator == "1") {
    return num1 + num2;
  } else if (operator == "2") {
    return num1 - num2;
  } else if (operator == "3") {
    return num1 * num2;
  } else if (operator == "4") {
    return num1 / num2;
  } else if (operator == "5") {
    return num1 % num2;
  } else if (operator == "6") {
    return num1 ** num2;
  } else {
    alert("Invalid Operation");
  }
}

let num1 = prompt("Enter number 1 -");
let num2 = prompt("Enter number 2 -");
let operator = prompt(
  "Choose Operation - \n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n5.Modulus\n6.Power Of"
);

console.log(operations(Number(num1), Number(num2), operator)); */

/* function simpleOperation(num1, num2) {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(Math.floor(num1 / num2));
}

let num1 = Number(prompt("Enter number 1 -"));
let num2 = Number(prompt("Enter number 2 -"));

simpleOperation(num1, num2); */

/* // @ Question 2
const randomNum = Math.random();
let otp = Math.floor(randomNum * 100);
console.log(otp); */

/* //@ Question 3
function round(n) {
  / return parseFloat(n.toFixed(2)); //@ Using toFixed
  return Math.round(n * 100) / 100;
}

const Num = 2139.58392489;

console.log(round(Num)); */

/* //@ Question 4
let num1 = 7483;
let num2 = 74;

console.log(Math.sqrt(num1));
console.log(Math.pow(num2, 2)); */

/* //@ Question 5

let angle = 45;

console.log(Math.sin((angle * Math.PI) / 180));
console.log(Math.cos((angle * Math.PI) / 180));
console.log(Math.round(Math.tan((angle * Math.PI) / 180))); */

//@ Question 6

function minMax(...a) {
  console.log(Math.max(...a));
  console.log(Math.min(...a));
}

let a = [-1, 1, 4, 3, 9, 56];

minMax(...a);
