const math = require('mathjs')
const sigmoid = require('./sigmoid')

/**
 * calcs the derivative of the sigmoid
 * mathjs has to map over the matrix
 * @param {number, matrix} x
 * @returns same type
 */
module.exports = x => x.map(value => {
  let s = sigmoid(value)
  return s * (1 - s)
})
