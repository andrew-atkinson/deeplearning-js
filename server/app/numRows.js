const math = require('mathjs')

module.exports = function (matrix) {
  if (matrix.size()[0] < 1) 
    return null// other edge cases?
  else 
    return matrix.size()[0]
}