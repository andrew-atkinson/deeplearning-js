const math = require('mathjs')

module.exports = function (x) {
  return x.map(value => 1 / (1 * math.exp(-value)))
}