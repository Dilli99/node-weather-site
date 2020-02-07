const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const locationBox = document.querySelector(".location");
const weather = document.querySelector(".weather");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;

  locationBox.textContent = "Loading...";
  weather.textContent = "";

  if (!location) {
    locationBox.textContent = "You must enter a location to get weather";
  } else {
    fetch("/weather?address=" + location).then(res => {
      res.json().then(data => {
        if (data.error) {
          locationBox.textContent = data.error;
        } else {
          locationBox.textContent = data.location;
          weather.textContent = data.forecast;
        }
      });
    });
  }
});
