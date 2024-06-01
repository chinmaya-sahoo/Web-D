let random = Math.random();
let a = prompt("Enter first number :");
let b = prompt("Enter second number :");
let c = prompt("Enter operation :");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
}

if (random > .1) {
   alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else {
    c = obj[c];
   alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}