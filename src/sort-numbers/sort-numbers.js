/**
 * Sorts an array of numbers from smallest to largest.
 *
 * @param {number[]} [arrayOfNumbers=[]] - The array of numbers to sort.
 * @returns {number[]} A new array with the same numbers, but sorted.
 */

const sortNumbers = (arrayOfNumbers = []) => {
    return [...arrayOfNumbers].sort((a, b) => a - b);
};

export default sortNumbers;
