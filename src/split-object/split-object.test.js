import splitObject from './split-object.js';

describe('Splits an object into multiple objects with one key/value pair each.', () => {
    test('Returns the new array of split objects.', () => {
        expect(splitObject({ a: 1, b: 2, c: 3 })).toEqual([
            { a: 1 },
            { b: 2 },
            { c: 3 },
        ]);
    });
    test('Returns the new array of split objects with different types.', () => {
        expect(
            splitObject({
                name: 'robs',
                age: 25,
                tall: true,
                userName: 'sbor',
            }),
        ).toEqual([
            { name: 'robs' },
            { age: 25 },
            { tall: true },
            { userName: 'sbor' },
        ]);
    });
    test('Returns empty array when empty object given', () => {
        expect(splitObject([])).toEqual([]);
    });
    test('Returns empty array when no object given', () => {
        expect(splitObject()).toEqual([]);
    });
});
