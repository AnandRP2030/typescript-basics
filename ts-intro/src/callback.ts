
function sumAndPrint(print: (sum: number, greet: string) => number, num1: number, num2: number) {
    let sum = num1 + num2;
    let output:number = print(sum, "hello")
    console.log("output", output)
}   

function print(sum: number, greet: string) {
    // some validation here
    console.log("greet", greet)
    return sum + 2;
}
sumAndPrint(print, 5, 10)



// arrow functions : checking target option in tsconfig.json file
const sayHi = () => {
    console.log("Hi")
};
sayHi()

let age = 24;
console.log("age:", age)


// not possible on implicitany: true
// function sayhello (name) {

// }