const math = require('mathjs')

module.exports = matrix => (matrix.size()[1] < 1)
                            ? 0
                            : matrix.size()[1]
