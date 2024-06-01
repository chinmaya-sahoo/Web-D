// Async nature of js
// console.log("I'm good")
// console.log("I'm also good")

// setTimeout(()=>{
//     console.log("I'm in a set-timout")
// },5000)
// setTimeout(()=>{
//     console.log("I'm in a set-timout next")
// },0)

// console.log("The end")

//call-back function

const callback = (arg) =>{
    console.log(arg)
}

const loadscript = (src , callback) =>{
    let src = document.createElement("script")
    sc.src = src
    sc.onload = callback("Harry")
    document.head.append(sc)
}

loadscript("",callback)

