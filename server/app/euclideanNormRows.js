const {index, range} = require('mathjs')
const math = require('mathjs')
const numRows = require('./numRows')
const numColumns = require('./numColumns')
const euclidNorm = require('./euclideanNorm')
const normalizeByRow = require('./normalizeByRow')

/**
 * take a matrix and returns a matrix with normalised rows
 * @param {Matrix} matrix 
 * @returns {Matrix}
 */
module.exports = matrix => {
  return normalizeByRow(matrix, euclidNorm)
}