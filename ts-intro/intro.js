"use strict";
let x = 1;
// x = "heyl" 
// This is the high level benefit of typescript. It lets you catch type errors at compile time
console.log(x);
// create a greet function 
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Anand");
// create a sum function 
function findSum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(findSum(34, 5));
// check adult
function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
console.log(isAdult(2));
console.log(isAdult(21));
function createDelay(anotherFn) {
    setTimeout(() => {
        anotherFn();
    }, 1000);
}
function executeAfterOneSec() {
    console.log("Hey im late");
}
createDelay(executeAfterOneSec);
