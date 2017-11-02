const {shape} = require('mathjs')
/**
 * helper func for shallow nueral network returning the sizes of the input, hidden and output layers
 * 
 * @param {Matrix} X matrix of X training examples
 * @param {Matrix} Y matrix of y hat labels
 */
module.exports = (X, Y) => [X.shape[0], 4, Y.shape[0]]
