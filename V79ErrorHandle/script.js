let a = prompt("Enter first number")

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this not allowed")
}
// let sum = a + b wrong
let sum = parseInt(a) + parseInt(b) //right

console.log("The sum is : ",sum)
function main(){
    let x =1 
    try {
        console.log("the sum is: " , sum*x)
        return true
    } catch (error) {
        console.log("error aa gaya bhai")
        return false
    }
    
    finally {
        console.log("Files are being closed and DB connection is being closed")
    }
}

let c = main();