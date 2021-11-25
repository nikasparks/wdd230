const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3"

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  document.getElementById('temp').textContent = jsObject.main.temp;
  document.getElementById('current').textContent = jsObject.weather[0].description;
  document.getElementById('speed').textContent = jsObject.wind.speed;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
  /*Wind Chill Calculation */

let temp = parseFloat(jsObject.main.temp);
let speed = parseFloat(jsObject.wind.speed);
if (temp <= 50 && speed > 3) {
    windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, .16)) + (0.4275 * temp * Math.pow(speed, 0.16))
    document.querySelector("#wind-value").innerHTML = `${windchill.toFixed(0)}&#176;F`;
    }
else{
    document.querySelector("#wind-value").innerHTML = "N/A";
    };
    
});