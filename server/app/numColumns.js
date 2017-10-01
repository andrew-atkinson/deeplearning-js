const math = require('mathjs')

module.exports = function (matrix) {
  if (matrix.size()[1] < 1) 
    return 0
  else 
    return matrix.size()[1]
}