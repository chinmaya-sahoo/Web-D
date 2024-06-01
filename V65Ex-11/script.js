//Wap to calculate factorial of a numberusing reduce & for loop

// Using reduced
let a = [1,2,3,4,5,6]

const red = (a , b,) => {
    return a*b 
}

console.log(a.reduce(red))


// Using for loop 

let num = prompt("enter a Number :")
let res=1 , i 
for( i=num ; i>0 ; i--){
    res *= i 
}

console.log(res)