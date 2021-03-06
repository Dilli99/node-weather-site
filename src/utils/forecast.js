const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/ef9c72fc536a6dbe0bc3cfbecbef9443/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        null,
        body.daily.data[0].summary +
          "It is currently " +
          body.currently.temperature +
          "°C and " +
          body.currently.precipProbability +
          " % chance of rain."
      );
    }
  });
};

module.exports = forecast;
