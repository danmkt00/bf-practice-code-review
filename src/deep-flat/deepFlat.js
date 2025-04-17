/** .........
 * Converts a nested array into a single array with no nesting
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */

const deepFlat = (array = []) => {
    const result = [];
    for(const item of array){
        if(Array.isArray(item)){
            result.push(...deepFlat(item));
        }else{
            result.push(item);
        }
    }

    return result;
};

export default deepFlat;
