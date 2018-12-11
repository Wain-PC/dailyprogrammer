const { solve, check, print } = require('./368.2');

describe('368.2', () => {
  it('should solve a matrix with size = 2', () => {
    const matrix = solve(2);
    expect(check(matrix)).toBe(true);
    print(matrix);
  });

  it('should solve a matrix with size = 3', () => {
    const matrix = solve(3);
    expect(check(matrix)).toBe(true);
    print(matrix);
  });

  it('should solve a matrix with size = 4', () => {
    const matrix = solve(4);
    expect(check(matrix)).toBe(true);
    print(matrix);
  });
});
