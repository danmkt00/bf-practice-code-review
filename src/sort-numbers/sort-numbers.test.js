import sortNumbers from './sort-numbers.js';

describe('Sorts an array of numbers from smallest to largest .', () => {
    test('Returns the new array of sorted numbers.', () => {
        expect(sortNumbers([1.5, 1, -1.5, 0, -1])).toEqual([
            -1.5, -1, 0, 1, 1.5,
        ]);
    });
    test('Returns the new array of sorted numbers with repeated values.', () => {
        expect(sortNumbers([1.5, 1, -1.5, 0, 0, -1])).toEqual([
            -1.5, -1, 0, 0, 1, 1.5,
        ]);
    });
    test('Returns empty array when empty array given', () => {
        expect(sortNumbers([])).toEqual([]);
    });
    test('Returns empty array when no arrays given', () => {
        expect(sortNumbers()).toEqual([]);
    });
});
