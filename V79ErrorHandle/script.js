let a = prompt("Enter first number")

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this not allowed")
}
// let sum = a + b wrong
let sum = parseInt(a) + parseInt(b) //right

console.log("The sum is : ",sum)