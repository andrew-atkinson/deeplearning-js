const {
  map,
  reshape,
  zeros,
  size,
  subset,
  index
} = require('mathjs')
const logistic = require('./logisticFunc')

/**
 * Predict whether each label is 0/1
 *
 * @param {Matrix} w weights, a numpy array of size (num_px * num_px * 3, 1)
 * @param {Number} b bias, a scalar
 * @param {Matrix} X data of size (num_px * num_px * 3, number of examples)
 * @returns {Matrix} Yprediction -- a vector containing all predictions (0/1) for the examples in X
 */
module.exports = (w, b, X) => {
  const m = size(X)[1]
  let Yprediction = zeros((1, X.shape[0]))
  reshape(w, [X.shape[0], 1])

  const A = w.map((_,i, matrix) => logistic(w, X, b))

  for (var i = 0; i < size(A)[1]; i++) Yprediction.subset(index(i), A.subset(index(i)) > 0.5 ? 1 : 0)

  return Yprediction
}