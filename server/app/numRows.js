const math = require('mathjs')

module.exports = matrix => (matrix.size()[0] < 1)
                            ? 0
                            : matrix.size()[0]