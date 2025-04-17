import intersection from './intersection.js';

describe('Creates an array of values that are in both the first and the second arrays.', () => {
    test('Returns the new array of filtered values.', () => {
        expect(intersection([2, 1], [2, 3])).toEqual([2]);
    });
    test('Returns the new array of filtered values without repeated values.', () => {
        expect(intersection([2, 1, 2], [2, 3])).toEqual([2]);
    });
    test('Returns empty array when no result', () => {
        expect(intersection([1, 2], [3, 4])).toEqual([]);
    });
    test('Returns empty array when two empty array given', () => {
        expect(intersection([], [])).toEqual([]);
    });
    test('Returns empty array when no arrays given', () => {
        expect(intersection()).toEqual([]);
    });
});
