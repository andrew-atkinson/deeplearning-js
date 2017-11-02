const {zeros} = require('mathjs')

/**
 * with one param: creates a zeroed vector of dimensions [dim, 1], and the initialized bias number 0
 * with 2nd param: creates a zeroed matrix, and the initialized bias number 0
 *
 * @param {Number} dimensions - size of the w vector
 * @param {number} hDimensions height of the matrix or vector (if left blank)
 * @returns {Matrix} 2D zero Matrix 
 *                   - or - 
 *                   Array: [1D vector of zeros sized by dimesions, and the number 0]
 */
module.exports = (wDimensions, hDimensions) => {
  (hDimensions)
    ? [zeros(wDimensions, hDimensions)]
    : [zeros(wDimensions), 0]
}