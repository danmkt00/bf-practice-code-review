import deepFlat from './deep-flat.js';

describe('deep flat -> Converts a nested array into a single array with no nesting', () => {
    test('Converts a nested array', () => {
        expect(deepFlat([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });
    test(`Converts a nested array with different values`, () => {
        expect(deepFlat([1, 2, 3])).toEqual([1, 2, 3]);
    });
    test(`Converts a nested array with strings`, () => {
        expect(deepFlat(['a', ['b', [['c'], ['d']], 'e']])).toEqual([
            'a',
            'b',
            'c',
            'd',
            'e',
        ]);
    });
    test('Returns empty array when the given array is empty', () => {
        expect(deepFlat([])).toEqual([]);
    });
    test('Returns empty array when the given input is empty', () => {
        expect(deepFlat()).toEqual([]);
    });
    test('Handles already flat arrays', () => {
        expect(deepFlat([1, 2, 3])).toEqual([1, 2, 3]);
    });
});
