/** .........
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * @param {object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 */

const splitObject = (toSeparate = {}) => {
    const result = [];
    for (const key in toSeparate) {
        const newObj = { [key]: toSeparate[key] };
        result.push(newObj);
    }

    return result;
};

export default splitObject;
