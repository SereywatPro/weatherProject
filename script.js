
"use strict"

const apiKey = "c5ac63ea05f4bc49a9b6482819d65f0a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  
const inputField = document.querySelector('input');
const btnEl = document.querySelector('button');

const imgEl = document.querySelector(".icon");


async function Weather(city) {
    try{
    const response = await fetch(apiUrl +city +`&appid=${apiKey}`);
    var data = await response.json();
    if (!data || !data.main) {
      throw new Error("Invalid data received");
    }
    // console.log(data)
    document.querySelector(".country").innerHTML = data.name;
    document.querySelector(".Temperature").innerHTML = data["main"]["temp"];

    
    document.querySelector(".Weather").innerHTML = data.weather[0].main;

    document.querySelector(".Humidity").innerHTML = data.main.humidity;

    document.querySelector(".Wind").innerHTML = data.wind.speed;

    document.querySelector(".Description").innerHTML = data.weather[0].description;

   /*  if (data.weather[0].main == "Clouds") {
      imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }
    else if (data.weather[0].main == "Clear") {
      imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }
    else if (data.weather[0].main == "Atmosphere") {
      imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }
    else if (data.weather[0].main == "Snow") {
      imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }
    else if (data.weather[0].main == "Rain") {
      imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }
    else if (data.weather[0].main == "Drizzle") {
      imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    }
    else if (data.weather[0].main == "Thunderstorm") {
      imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } */
    /* 😢 */
     imgEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } catch (error) {
        document.querySelector(".country").innerHTML = "City or Country not found!";
        document.querySelector(".Weather").innerHTML =
            "weather not found!";
        document.querySelector(".Description").innerHTML = "Description Not found!"
          document.querySelector(".Wind").innerHTML = "0";
        document.querySelector(".Temperature").innerHTML =
          "0";
    }
   
}


btnEl.addEventListener("click", () => {
        if (!inputField.value.trim()) {
            document.querySelector(".text").classList.add("active2");
            return;
    } 
    
            Weather(inputField.value);
            document.querySelector('.details').classList.add('active');
            document.querySelector(".text").classList.remove("active2");
        
});







