const { solve, bonus, getData } = require('./360.2');


describe('360.2', () => {
  const examples = [
    ['48.8584 N', '2.2945 E'],
    ['40.6413 N', '73.7781 W'],
  ];

  let flights;
  beforeAll(async () => {
    flights = await getData();
  });

  examples.forEach(([lat, lon]) => {
    it(`should solve main task (input '${lat} : ${lon}')`, async () => {
      const {
        distance,
        callsign,
        latitude,
        longitude,
        altitude,
        country,
        icao,
      } = await solve(flights, lat, lon);

      expect(distance).toBeGreaterThan(0);
      expect(typeof callsign).toBe('string');
      expect(latitude).toBeGreaterThanOrEqual(-90);
      expect(latitude).toBeLessThanOrEqual(90);
      expect(longitude).toBeGreaterThanOrEqual(-180);
      expect(longitude).toBeLessThanOrEqual(180);
      expect(altitude).toBeGreaterThan(0);
      expect(typeof country).toBe('string');
      expect(typeof icao).toBe('string');
    }, 20000);

    it(`should solve bonus (input '${lat} : ${lon}')`, async () => {
      const {
        distance,
        callsign,
        latitude,
        longitude,
        altitude,
        country,
        icao,
      } = await bonus(flights, lat, lon);

      expect(distance).toBeGreaterThan(0);
      expect(typeof callsign).toBe('string');
      expect(latitude).toBeGreaterThanOrEqual(-90);
      expect(latitude).toBeLessThanOrEqual(90);
      expect(longitude).toBeGreaterThanOrEqual(-180);
      expect(longitude).toBeLessThanOrEqual(180);
      expect(altitude).toBeGreaterThan(0);
      expect(typeof country).toBe('string');
      expect(typeof icao).toBe('string');
    }, 20000);

    it(`'bonus' and 'solve' outputs should be the same (input '${lat} : ${lon}')`, async () => {
      const { distance: distanceSolve, ...solveData } = await solve(flights, lat, lon);
      const { distance: distanceBonus, ...bonusData } = await bonus(flights, lat, lon);

      expect(solveData).toEqual(bonusData);
    }, 20000);
  });
});
