const request = require('request-promise-native');

const euclidianDistance = (lat1, lon1, h1, lat2, lon2, h2) => {

};


const solve = async (lat, lon) => {
  const data = request.get('https://opensky-network.org/api/states/all');
  const { states: flights } = JSON.parse(data);
};

module.exports = { solve };
