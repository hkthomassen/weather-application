// Date

function showDate() {
  let currentTime = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentDate = document.querySelector("#aktuellesDatum");
  aktuellesDatum.innerHTML = `${day} ${hour}:${minutes}`;
}

showDate();

// City

function showCity(event) {
  event.preventDefault();
  let showCurrentCity = document.querySelector("h1");
  let cityInput = document.querySelector("#city-input");
  showCurrentCity.innerHTML = cityInput.value;

  let apiKey = "b40b135798f82a05aed08769f9275f50";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let searchCityForm = document.querySelector(".city-search-form");
searchCityForm.addEventListener("submit", showCity);

// Current Temperature

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}`;
}

// Current Location

function searchLocation(position) {
  let apiKey = "b40b135798f82a05aed08769f9275f50";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocation = document.querySelector("#current-location-button");
currentLocation.addEventListener("click", getCurrentLocation);
