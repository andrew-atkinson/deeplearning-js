const {index, range} = require('mathjs')

/**
 * takes a matrix, returns a row
 * 
 * @param {Matrix} matrix 
 * @param {Number} row zero indexed
 * @returns {Matrix} 1D Matrix
 */
module.exports = (matrix, row) => matrix.size()[0] < 1 ? 0 : matrix.index([row])
