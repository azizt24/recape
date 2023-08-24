 
function add(num1, num2) {
  return num1 + num2;
}

 
function multiplySum(sumResult, factor) {
  return sumResult * factor;
}

 
let num1 = 5;
let num2 = 7;
let factor = 3;

let sumResult = add(num1, num2);
let finalResult = multiplySum(sumResult, factor);

 
console.log("The final result is: " + finalResult);


