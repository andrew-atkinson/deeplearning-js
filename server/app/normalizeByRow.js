const {subset, index, range} = require('mathjs')
const numRows = require('./numRows')
const numColumns = require('./numColumns')

/**
 * takes a matrix and returns a matrix normalized by row
 * 
 * @param {Matrix} matrix 
 * @param {function} rowFunc a function that determines the type of normalizing
 * @returns {Matrix}
 */
module.exports = (matrix, rowFunc) => {
  let rows = numRows(matrix),
    columns = numColumns(matrix)
  for (var i = 0; i < rows; i++) {
    let rowSum = rowFunc(matrix.subset(index([i], range(0, columns))))
    for (var j = 0; j < columns; j++) {
      let value = matrix.subset(index(i, j)) / rowSum
      matrix.subset(index(i, j), value)
    }
  }
  return matrix
}