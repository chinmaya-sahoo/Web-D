const time = document.getElementById('clock');
function updateTime(){
    var now = new Date();
    time.innerHTML = now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();

}

updateTime();
setInterval(updateTime , 1000);
