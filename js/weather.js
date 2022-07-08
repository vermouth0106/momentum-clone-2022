const API_KEY = "0a9c74fdbdeec3088202eb4731e24274";

const weathericons = {
  01: "fa-solid fa-sun",
  02: "fa-solid fa-cloud-sun",
  03: "fa-solid fa-cloud",
  04: "fa-brands fa-mixcloud",
  09: "fa-solid fa-cloud-showers-heavy",
  10: "fa-solid fa-cloud-sun-rain",
  11: "fa-solid fa-cloud-bolt",
  13: "fa-solid fa-snowflake",
  50: "fa-solid fa-smog",
};

console.log(weathericons);

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((respone) => respone.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const weatherIcon = document.querySelector("#weather-icon");
      const city = document.querySelector("#weather span:last-child");

      const icon = parseInt(data.weather[0].icon.substring(0, 2));

      weather.innerText = `${data.weather[0].main} / ${data.main.temp} / ${data.main.humidity} / ${data.wind.speed}`;
      weatherIcon.classList = `${weathericons[icon]}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
