const Bag = require('./Bag');

describe('Bag class', () => {
  //bag has weight
  test('bag has weight', () => {
    const bag = new Bag(23);
    expect(bag.weight).toBe(23);
  });

  //if bag has no weight, return error
  test('bag has no weight to return an error', () => {
    expect(() => new Bag()).toThrowError('Bag weight is required');
  });

  describe('Bag', () => {
    it('should create a bag with the correct weight', () => {
      const bag = new Bag(20);
      expect(bag.weight).toBe(20);
    });

    it('should throw an error if the weight exceeds the maximum', () => {
      expect(() => {
        new Bag(24);
      }).toThrowError('Bag weight of 24kg exceeds the maximum of 23kg.');
    });
  });
});
