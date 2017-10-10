const {zeros} = require('mathjs')

/**
 * creates a zeroed vector of dimensions [dim, 1], and the initialized bias number 0
 * 
 * @param {Number} dimensions - size of the w vector 
 * @returns {Array} Array of form: [1D vector of zeros sized by dimesions, and the number 0]
 */
module.exports = wDimensions => [zeros(wDimensions, 1), 0]