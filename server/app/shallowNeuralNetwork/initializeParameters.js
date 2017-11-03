const {zero, random} = require('mathjs') ///// put the various funcs in: random matrices, zero'd matrices

/**
 * initializes the weights with matrices of random numbers and the biases with matrices with zeros
 *
 * USE layersizes.js as the input...
 *
 * @param {number} nX size of the input layer
 * @param {number} nH size of the hidden layer (single hidden layer)
 * @param {number} nY size of the output layer
 */
module.exports = (nX, nH, nY) => ({
  W1: random([nH, nX], 0.01),
  b1: zeros(nH, 1),
  W2: random([nY, nH], 0.01),
  b2: zeros(nY, 1)
})
