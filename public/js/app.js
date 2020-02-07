const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  if (!location) {
    console.log("You must enter a location to get weather");
  } else {
    fetch("/weather?address=" + location).then(res => {
      res.json().then(data => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageOne.textContent = data.forecast;
        }
      });
    });
  }
});
