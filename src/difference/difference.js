/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values with no side-effects.
 */

const difference = (array = [], values = []) => {
    let result = [];
    array.forEach((value) => {
        if (!values.includes(value)) {
            if (!result.includes(value)) {
                result.push(value);
            }
        }
    });

    return result;
};

export default difference;
