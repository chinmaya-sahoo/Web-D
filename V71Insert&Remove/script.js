let div = document.createElement("div")
div.innerHTML = "I was inserted <b>by you</b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div)  
// container last mai insert
document.querySelector(".container").before(div)  
//pura first
document.querySelector(".container").after(div)  
//pura last