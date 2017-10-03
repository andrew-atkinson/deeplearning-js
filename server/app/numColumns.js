const math = require('mathjs')

/**
 * helper func for calculating the no. of columns
 * 
 * @param {Matrix} matrix
 * @returns {number} of columns in matrix 
 */
module.exports = matrix => (matrix.size()[1] < 1)
                            ? 0
                            : matrix.size()[1]
