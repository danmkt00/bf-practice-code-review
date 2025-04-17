import difference from './difference.js';

describe('Creates an array of values that are in the first array, but not not in the second array.', () => {
    test('Returns the new array of filtered values.', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
    test('Returns the new array of filtered values without repeated values.', () => {
        expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
    });
    test('Returns empty array when no result', () => {
        expect(difference([1, 2], [1, 2])).toEqual([]);
    });
    test('Returns empty array when two empty array given', () => {
        expect(difference([], [])).toEqual([]);
    });
    test('Returns empty array when no arrays given', () => {
        expect(difference()).toEqual([]);
    });
});
