console.log("hey you are nice");
console.log("you are smart");
console.log("you are handsome");
console.log("you are clever");

function nice(name) {
    console.log("hey " + name + " you are nice");
}

nice("harry");
nice("chinmaya");

function sum(a,b,c=3) {
    // console.log(a+b);
    return a+b+c;
}

let result1 =sum(4);
let result2 =sum(4,9);
let result3 =sum(4,9,7);

console.log(result1);
console.log(result2);
console.log(result3);

const func1 = (x)=>{
    console.log("I am an arrow function",x);
}

func1(34);
func1(66);
func1(88);

