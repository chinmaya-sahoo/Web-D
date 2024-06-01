console.log(`this is promises`)

let prom1 = new Promise((resolve ,reject) => {
    let a =Math.random();
    if(a<0.5){
        reject("No random number was not supporting not")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done")
            resolve("Harry")
        },3000)
    }
})

let prom2 = new Promise((resolve ,reject) => {
    let a =Math.random();
    if(a<0.5){
        reject("No random number was not supporting not 2")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done")
            resolve("Harry 2")
        },1000)
    }
})

// prom1.then((a)=>{
//     console.log(a)
// })

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err) 
// })

let p3 =Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err) 
})

