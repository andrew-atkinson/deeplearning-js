const {tanh} = require('mathjs')

/**
 * returns the derivative of the tanh function
 *
 * @param {any} input, a number or matrix
 * @returns {any} sames as input
 */
module.exports = input => Math.pow((tanh(input)), 2)