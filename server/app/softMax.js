const {exp, sum, index, range} = require('mathjs')
const numRows = require('./numRows')
const row = require('./row')
const numColumns = require('./numColumns')

module.exports = matrix => {
  matrix = matrix.map(value => exp(value))
  let rows = numRows(matrix),
    columns = numColumns(matrix)
  for (var i = 0; i < rows; i++) {
    let rowSum = sum(matrix.subset(index([i], range(0, columns))))
    for (var j = 0; j < columns; j++) {
      let softMaxValue = matrix.subset(index(i, j)) / rowSum
      matrix.subset(index(i, j), softMaxValue)
    }
  }
  return matrix
}