"use srtrict";
const weatherBlock = document.querySelector("#weather");

async function loadWeather(event) {
  weatherBlock.innerHTML = `
      <div class="weather_loading"><img class="loader" src="./images/mysh2.jpg" alt=""></div>
      `;
  let cityValue = "London";
  const server =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityValue +
    "&APPID=89ea4480f451ffd24b79617df1ba2bb0";
  const response = await fetch(server, { method: "GET" });
  const responseResult = await response.json();
  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}

function getWeather(data) {
    console.log(data);
    const city = data.name;
    const temp = data.main.temp;
    const icon = data.weather[0].icon;
    const template = `
      <div id="city"><h2>${city}</h2></div>
      <div id="temp">${temp}</div>
      <div id="icon"><img src="https://api.openweathermap.org/img/w/${icon}.png" alt=""></div>
      `;
    weatherBlock.innerHTML = template;
  }

  if (weatherBlock) {
    loadWeather();
  }