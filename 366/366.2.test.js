const { funnel2, funnel2bonus } = require('./366.2');

describe('366.2', () => {
  it('should pass examples', async () => {
    expect(await funnel2('gnash')).toBe(4);
    expect(await funnel2('princesses')).toBe(9);
    expect(await funnel2('turntables')).toBe(5);
    expect(await funnel2('implosive')).toBe(1);
    expect(await funnel2('programmer')).toBe(2);
  });
  it('should pass a bonus', async () => {
    const result = await funnel2bonus();
    expect(result).toBe('complecting');
  });
});
