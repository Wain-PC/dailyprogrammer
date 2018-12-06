const request = require('request-promise-native');

const euclidianDistance = (lat1 = 0, lon1 = 0, lat2 = 0, lon2 = 0) => Math.sqrt(
  ((lat2 - lat1) ** 2) + ((lon2 - lon1) ** 2),
);

const convertCoords = (latString, lonString) => {
  const latRegExp = /(\d{1,2}.\d{4}) ([NS])/;
  const lonRegExp = /(\d{1,2}.\d{4}) ([EW])/;

  const [, latValue, latSign] = latString.match(latRegExp);
  const [, lonValue, lonSign] = lonString.match(lonRegExp);

  const lat = parseFloat(latValue) * (latSign === 'N' ? 1 : -1);
  const lon = parseFloat(lonValue) * (lonSign === 'E' ? 1 : -1);

  return { lat, lon };
};


const solve = async (latString, lonString) => {
  const { lat, lon } = convertCoords(latString, lonString);
  const data = await request.get('https://opensky-network.org/api/states/all');
  const { states: flights } = JSON.parse(data);
  let closestFlight = {
    distance: Infinity,
  };
  flights.forEach(([icao, callsign, country,,, longitude, latitude,, onGround,,,,, altitude]) => {
    if (onGround) {
      return;
    }
    const distance = euclidianDistance(lat, lon, latitude, longitude);
    if (distance < closestFlight.distance) {
      closestFlight = {
        distance,
        callsign,
        latitude,
        longitude,
        altitude,
        country,
        icao,

      };
    }
  });
  return closestFlight;
};

module.exports = { solve };
