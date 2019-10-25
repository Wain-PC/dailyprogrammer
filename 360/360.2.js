const request = require("request-promise-native");

const euclidianDistance = (lat1 = 0, lon1 = 0, lat2 = 0, lon2 = 0) =>
  Math.sqrt((lat2 - lat1) ** 2 + (lon2 - lon1) ** 2);

const rad = x => (x * Math.PI) / 180;

const geodesicDistance = (lat1 = 0, lon1 = 0, lat2 = 0, lon2 = 0) => {
  const earthRadius = 6371; // in kilometers
  const lat1Angle = rad(lat1);
  const lat2Angle = rad(lat2);
  const latAngle = lat2Angle - lat1Angle;
  const lonAngle = rad(lon2 - lon1);
  const a =
    Math.sin(latAngle / 2) ** 2 +
    Math.cos(lat1Angle) * Math.cos(lat2Angle) * Math.sin(lonAngle) ** 2;
  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const convertCoords = (latString, lonString) => {
  const latRegExp = /(\d{1,2}.\d{4}) ([NS])/;
  const lonRegExp = /(\d{1,2}.\d{4}) ([EW])/;

  const [, latValue, latSign] = latString.match(latRegExp);
  const [, lonValue, lonSign] = lonString.match(lonRegExp);

  const lat = parseFloat(latValue) * (latSign === "N" ? 1 : -1);
  const lon = parseFloat(lonValue) * (lonSign === "E" ? 1 : -1);

  return { lat, lon };
};

const getData = async () => {
  const data = await request.get("https://opensky-network.org/api/states/all");
  const { states: flights } = JSON.parse(data);
  return flights;
};

const solve = async (
  flights,
  latString,
  lonString,
  distanceCalculator = euclidianDistance
) => {
  const { lat, lon } = convertCoords(latString, lonString);
  let closestFlight = {
    distance: Infinity
  };
  flights.forEach(
    ([
      icao,
      callsign,
      country,
      ,
      ,
      longitude,
      latitude,
      ,
      onGround,
      ,
      ,
      ,
      ,
      altitude
    ]) => {
      if (onGround) {
        return;
      }
      const distance = distanceCalculator(lat, lon, latitude, longitude);
      if (distance < closestFlight.distance) {
        closestFlight = {
          distance,
          callsign,
          latitude,
          longitude,
          altitude,
          country,
          icao
        };
      }
    }
  );
  return closestFlight;
};

const bonus = (...args) => solve(...args, geodesicDistance);

module.exports = { getData, solve, bonus };
