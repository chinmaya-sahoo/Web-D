const apikey ="e31df85605810b016ebb4d8836c95f1a";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWaether(city){
    const respons = await fetch(apiurl + city + `&appid=${apikey}`);

    var data = await respons.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.
    humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "clouds.png"
    }

    if(data.weather[0].main=="Clear"){
        weatherIcon.src = "clear.png"
    }

    if(data.weather[0].main=="Rain"){
        weatherIcon.src = "rain.png"
    }

    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
}

searchBtn.addEventListener("click",()=>{
    checkWaether(searchBox.value);
})