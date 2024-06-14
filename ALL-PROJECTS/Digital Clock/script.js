const WEEK = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];

function updateTime(){
    var now = new Date();

    document.getElementById("time").innerText = zeroPadding(now.getHours(),2) + " : " + zeroPadding(now.getMinutes(),2) + " : " + zeroPadding(now.getSeconds(),2) ;

    document.getElementById("date").innerText = now.getFullYear() + " - " + zeroPadding(now.getMonth() + 1 ,2) + " - " + zeroPadding(now.getDate(),2) +  " - " + WEEK[now.getDay()] ;
}