const propagate = require('./propagate')

/**
 * This function optimizes w and b by running a gradient descent algorithm
 *
 * @param {Matrix} w weights, a numpy array of size (num_px * num_px * 3, 1)
 * @param {Number} b bias, a scalar
 * @param {Matrix} X data of shape (num_px * num_px * 3, number of examples)
 * @param {Matrix} Y true "label" vector (containing 0 if non-cat, 1 if cat), of shape (1, number of examples)
 * @param {Number} numIterations number of iterations of the optimization loop
 * @param {Number} learningRate learning rate of the gradient descent update rule
 * @param {Boolean} [printCost=False] True to print the loss every 100 steps
 * @returns {Array} [params-- dictionary containing the weights w and bias b,
                     grads-- dictionary containing the gradients of the weights and bias with respect to the cost function,
                     costs-- list of all the costs computed during the optimization]
 */
module.exports = (w, b, X, Y, numIterations, learningRate, printCost = False) => {
  let grads,
    cost,
    costs = [];

  for (var i = 0; i < numIterations; i++) {
    [grads, cost] = propagate(w, b, X, Y)

    let dw = grads['dw']
    let db = grads['db']

    w = -learningRate * dw
    b = -learningRate * db

    if (i % 100 == 0) 
      costs.push(cost)
    if (printCost && i % 100 == 0) 
      console.log("Cost after iteration", i, cost)
  }

  const params = {
    w,
    b
  }

  const grads = {
    dw,
    db
  }

  return [params, grads, costs]
}