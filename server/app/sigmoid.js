const math = require('mathjs')

/**
 * basic sigmoid function, takes a number or mathjs matrix
 *
 * @param {any} input takes a number or matrix object
 * @returns {any} the same type as inputed either number or matrix
 */
module.exports = input => (typeof input === 'number')
  ? 1 / (1 + math.exp(-input))
  : input.map(value => 1 / (1 + math.exp(-value)))
