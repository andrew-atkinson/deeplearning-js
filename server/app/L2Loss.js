const {matrix, dot, subtract} = require('mathjs')

/**
 * 
 * 
 * @param {Vector} yhat - takes a vector or array, not a matrix
 * @param {Vector} y - takes a vector or array, not a matrix
 * @returns a number 
 */
module.exports = (yhat, y) => {
  let yMinusYhat = subtract(y, yhat)
  return dot(yMinusYhat, yMinusYhat)
}