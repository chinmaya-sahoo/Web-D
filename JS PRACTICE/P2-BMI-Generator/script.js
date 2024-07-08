let button = document.getElementById("btn")
let height = parseInt(document.querySelector('#height'))
let weight = parseInt(document.querySelector('#weight'))
let BMI = 
if(BMI<18.6){
    button.addEventListener("click",()=>{
        document.getElementById("results").innerHTML = "under weight"
    })
}
else if(BMI>18.6 && BMI<24.9){
    button.addEventListener("click",()=>{
        document.getElementById("results").innerHTML = "under weight"
    })
}
else{
    button.addEventListener("click",()=>{
        document.getElementById("results").innerHTML = "under weight"
    })
}
