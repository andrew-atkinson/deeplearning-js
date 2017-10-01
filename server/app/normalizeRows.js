const {index, range} = require('mathjs')
const math = require('mathjs')
const numRows = require('./numRows')
const numColumns = require('./numColumns')
const euclidNorm = require('./euclideanNorm')

module.exports = function (matrix) {
  let rows = numRows(matrix),
    columns = numColumns(matrix)
  for (var i = 0; i < rows; i++) {
    let rowNorm = euclidNorm(matrix.subset(index([i], range(0, columns))))
    for (var j = 0; j < columns; j++) {
      let normalisedValue = matrix.subset(math.index(i, j)) / rowNorm
      matrix.subset(math.index(i, j), normalisedValue)
    }
  }
  return matrix
}