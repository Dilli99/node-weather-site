const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiYWRtaXJhbDEzMzciLCJhIjoiY2s2N3cyb3NhMG9kNjNscWpteWJ3bmd5aiJ9.lXR4N7qnGH_zm4-KgIY-sw&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.features.length == 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(null, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
