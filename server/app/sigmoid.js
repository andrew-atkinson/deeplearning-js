const math = require('mathjs')

module.exports = function (matrix) {
  return matrix.map(value => 1 / (1 * math.exp(-value)))
}