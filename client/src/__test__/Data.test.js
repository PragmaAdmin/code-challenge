import Array from '../data';

describe('Data Beers', () => {
  it('Testing: data not null', () => {
    expect(Array).not.toBeNull();
  });

  it('Testing: at least one data lo load', () => {
    expect(Array.length).toBeGreaterThan(1);
  });
});