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
      const weatherName = document.querySelector("#weather .weather__name");
      const weatherTemp = document.querySelector(".weather__temp");
      const weatherIcon = document.querySelector(".weather__icon i");
      const weatherHumidity = document.querySelector(
        ".weather__humidity__text"
      );
      const weatherWindSpeed = document.querySelector(
        ".weather__wind-speed__text"
      );
      const city = document.querySelector(".weather__city");

      const icon = parseInt(data.weather[0].icon.substring(0, 2));

      weatherName.innerText = `${data.weather[0].main}`;
      city.innerText = data.name;
      weatherTemp.innerText = `${data.main.temp}℃`;
      weatherHumidity.innerText = `${data.main.humidity}%`;
      weatherWindSpeed.innerText = `${data.wind.speed}km/h`;
      weatherIcon.classList = `${weathericons[icon]}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
