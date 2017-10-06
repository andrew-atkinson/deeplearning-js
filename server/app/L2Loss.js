const {matrix, dot, subtract} = require('mathjs')

/**
 * calculates the dot product of yhat-y (truth - prediction)
 * 
 * @param {Vector} yhat - takes a vector or array, not a matrix
 * @param {Vector} y - takes a vector or array, not a matrix
 * @returns {number} a number 
 */
module.exports = (yhat, y) => {
  let yMinusYhat = subtract(y, yhat)
  return dot(yMinusYhat, yMinusYhat)
}