const {index, range} = require('mathjs')

module.exports = function (matrix, row) {
  if (matrix.size()[0] < 1) 
    return // edge cases?
  else 
    return matrix.index([row])
}