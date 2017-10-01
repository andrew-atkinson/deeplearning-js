const {index, range, clone} = require('mathjs')
const math = require('mathjs')
const numRows = require('./numRows')
const euclidNorm = require('./euclideanNorm')

module.exports = function (matrix) {
  let num = numRows(matrix)
  for (var i = 0; i < num; i++) { 
    let rownorm = euclidNorm(matrix.subset(index([i], range(0, matrix.size()[1]))))
    for (var j = 0; j < matrix.size()[1]; j++) {
      let normalisedValue = matrix.subset(math.index(i, j)) / rownorm
      matrix.subset(math.index(i, j), normalisedValue)
    }
  }
  return matrix
}