"use strict";
function sumAndPrint(print, num1, num2) {
    let sum = num1 + num2;
    let output = print(sum, "hello");
    console.log("output", output);
}
function print(sum, greet) {
    // some validation here
    console.log("greet", greet);
    return sum + 2;
}
sumAndPrint(print, 5, 10);
// arrow functions : checking target option in tsconfig.json file
const sayHi = () => {
    console.log("Hi");
};
sayHi();
