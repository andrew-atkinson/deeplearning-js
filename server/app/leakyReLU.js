const math = require('mathjs')

/**
 * leaky rectified Linear Unit function, takes a number or mathjs matrix
 *
 * @param {any} input takes a number or matrix object
 * @returns {any} the same type as inputed either number or matrix
 */
module.exports = input => typeof input === 'number'
                          ? Math.max(0.01 * input, input)
                          : input.map(value => Math.max(0.01 * input, value))
