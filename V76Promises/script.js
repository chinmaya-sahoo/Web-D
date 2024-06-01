function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500)
    })
}

async function main(){
console.log("loading module")

console.log("Do something else")

console.log("Load data")

let data = await getdata()

console.log(data)

console.log("process data")

console.log("task 2")
}
// data.then((v) => {
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
// })