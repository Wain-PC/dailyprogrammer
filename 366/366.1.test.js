const funnel = require('./366.1');

describe('366.1', () => {
  it('should pass examples', () => {
    expect(funnel('leave', 'eave')).toBe(true);
    expect(funnel('reset', 'rest')).toBe(true);
    expect(funnel('dragoon', 'dragon')).toBe(true);
    expect(funnel('eave', 'leave')).toBe(false);
    expect(funnel('sleet', 'lets')).toBe(false);
    expect(funnel('skiff', 'ski')).toBe(false);
  });
});
