const {
  clone,
  size,
  dot,
  sum,
  map,
  squeeze,
  transpose
} = require('mathjs')
const sigmoid = require('./sigmoid')

/**
 * propagation function forwards and backwards, learns the parameters
 * 
 * @param {Matrix} w matrix of size (px * 3 px * 3, 1)
 * @param {Number} b bias, a scalar number
 * @param {Matrix} X data (num_px * num_px * 3, no. of examples)
 * @param {Matrix} Y yhat true label vector, 0 or 1
 * @returns {Array} Array of [gradients object, cost number] 
 */
module.exports = (w, b, X, Y) => {
  const m = size(X)[1]
  const A = sigmoid(dot(transpose(w), X) + b)

  let cost = clone(Y)
  cost = -1 / m * sum(map(cost, () => Y * Math.log(A) + (1 - Y) * Math.log(1 - A)))

  let dw = dot(X, transpose(A - Y)) / m
  let db = sum(A - Y) / m

  let gradients = {
    dw,
    db
  }

  return [gradients, squeeze(cost)]
}