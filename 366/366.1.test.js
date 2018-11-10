const { funnel, bonus, bonus2 } = require('./366.1');

describe('366.1', () => {
  it('should pass examples', () => {
    expect(funnel('leave', 'eave')).toBe(true);
    expect(funnel('reset', 'rest')).toBe(true);
    expect(funnel('dragoon', 'dragon')).toBe(true);
    expect(funnel('eave', 'leave')).toBe(false);
    expect(funnel('sleet', 'lets')).toBe(false);
    expect(funnel('skiff', 'ski')).toBe(false);
  });
  it('should pass bonus examples', async () => {
    expect(await bonus('dragoon')).toEqual(['dragon']);
    expect(await bonus('boats')).toEqual(['oats', 'bats', 'bots', 'boas', 'boat']);
    expect(await bonus('affidavit')).toEqual([]);
  });
  it('should pass bonus #2', async () => {
    const wordsWithFiveFunnels = await bonus2();
    expect(wordsWithFiveFunnels.length).toEqual(28);
    expect(wordsWithFiveFunnels).toEqual([
      'beasts',
      'boats',
      'brands',
      'chards',
      'charts',
      'clamps',
      'coasts',
      'cramps',
      'drivers',
      'grabblers',
      'grains',
      'grippers',
      'moats',
      'peats',
      'plaints',
      'rousters',
      'shoots',
      'skites',
      'spates',
      'spicks',
      'spikes',
      'spines',
      'teats',
      'tramps',
      'twanglers',
      'waivers',
      'writes',
      'yearns']);
  });
});
