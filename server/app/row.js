const {index, range} = require('mathjs')

module.exports = (matrix, row) => (matrix.size()[0] < 1)
                                    ? 0
                                    : matrix.index([row])
