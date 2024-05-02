let x: number = 1;
// x = "heyl" 
// This is the high level benefit of typescript. It lets you catch type errors at compile time
console.log(x);


// create a greet function 
function sayHello (name:string) {
    console.log("Hello "+name);
}
sayHello("Anand")


// create a sum function 
function findSum (num1: number, num2: number):number {
    let sum: number = num1 + num2;
    return sum;
}
console.log(findSum (34, 5));


// check adult
function isAdult (age: number):boolean {
    if (age >= 18) {
        return true;
    }
    return false;
}
console.log(isAdult(2))
console.log(isAdult(21))

function createDelay(anotherFn: () => void) {
    setTimeout(() => {
        anotherFn()
    }, 1000)
}
function executeAfterOneSec() {
    console.log("Hey im late");
}
createDelay(executeAfterOneSec)