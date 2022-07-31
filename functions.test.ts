const {shuffleArray} = require('./utils');

describe('shuffleArray should', () => {
    test("expect the returned array to equal to the length of the array that was passed", () => {
        expect(shuffleArray([1, 2, 3, 4])).toHaveLength(4)
});

test("expect the returned array items to be the same array items that are passed in under arguments", () => {
    expect([3, 2, 1]).toEqual(expect.arrayContaining(shuffleArray([3, 2, 1])));
  });
});
