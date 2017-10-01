const math = require('mathjs')

/**
 * basic sigmoid function
 * 
 * @param {any} input takes a number or matrix object
 * @returns the same type as inputed
 */
module.exports = function (input) {
  return (typeof input === 'number') 
    ? 1 / (1 + math.exp(-input)) 
    : input.map(value => 1 / (1 + math.exp(-value)))
}