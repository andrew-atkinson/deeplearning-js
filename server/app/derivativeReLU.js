const math = require('mathjs')

/**
 * derivative of rectified Linear Unit function, takes a number or mathjs matrix
 *
 * @param {any} input takes a number or matrix object
 * @returns {any} the same type as inputed either number or matrix
 */
module.exports = input => {
  if (typeof input === 'number') {
    return (input < 0)
      ? 0
      : 1
  } else {
    return input.map(value => (value < 0)
      ? 0
      : 1)
  }
}