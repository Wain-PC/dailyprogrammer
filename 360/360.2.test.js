const { solve } = require('./360.2');


describe('360.2', () => {
  const examples = [
    ['48.8584 N', '2.2945 E'],
    ['40.6413 N', '73.7781 W'],
  ];

  examples.forEach(([lat, lon]) => {
    it(`should solve main task (input '${lat} : ${lon}')`, async () => {
      const { states: flights } = JSON.parse(await solve(lat, lon));
      expect(result).toBe(lon);
    });
  });
});
