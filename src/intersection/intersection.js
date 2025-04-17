/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values with no side affects
 */

const intersection = (array = [], values = []) => {
    let result = [];
    array.forEach((value) => {
        if (values.includes(value)) {
            if (!result.includes(value)) {
                result.push(value);
            }
        }
    });

    return result;
};

export default intersection;
