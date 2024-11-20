
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "8e9b8ae1b4e404c6fa759657ff494dec";

async function weatherCheck(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector(".error").style.display = "none";
    }

    const data  = await responce.json()


    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like);
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity);
    document.querySelector(".wind-speed").innerHTML = data.wind.speed;
    document.querySelector(".air-pressure").innerHTML = data.main.pressure;
    document.querySelector(".visibility").innerHTML = data.visibility/1000;
    document.querySelector(".sea-level").innerHTML = data.main.sea_level;
    
    const icon = document.querySelector(".weather-icon")
    if (data.weather[0].main == "Clouds") {
        icon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        icon.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png"
    }
    
}


let input = document.querySelector("input")
let btn = document.querySelector("#btn")

btn.addEventListener("click",() =>{
    weatherCheck(input.value)

})
