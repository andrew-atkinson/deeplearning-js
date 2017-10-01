const math = require('mathjs')

module.exports = function (matrix) {
  if (matrix.size()[0] < 1) 
    return 0
  else 
    return matrix.size()[0]
}