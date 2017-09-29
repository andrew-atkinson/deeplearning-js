const math = require('mathjs')

module.exports = function (x) {
  return (typeof x === 'number') 
    ? 1 / (1 * math.exp(-x)) 
    : x.map(value => 1 / (1 * math.exp(-value)))
}