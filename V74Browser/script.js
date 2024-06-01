let button = document.getElementById("btn")
button.addEventListener("click",()=>{
    alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b>"
})

document.addEventListener("keydown",(e)=>{
    console.log(e ,e.key , e.key)
})