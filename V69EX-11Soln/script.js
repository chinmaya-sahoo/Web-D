let a= 6 ;
function fact(num) {
    let arr = Array.from(Array(num+1).keys())
    console.log(arr.slice(1,))

    let c = arr.slice(1,).reduce((a , b)=>{
        return a*b 
    })
    console.log(c)
}

fact(a)


let num = prompt("enter a Number :")
let res=1 , i 
for( i=num ; i>0 ; i--){
    res *= i 
}
