const {dot, transpose, subset, index} = require('mathjs')
const sigmoid = require('./sigmoid')

/**
 * performs for the logistic function
 * 
 * @param {Matrix} w Weights
 * @param {Matrix} X An array of examples
 * @param {Number} b bias scalar
 */
module.exports = (w, X, b) => sigmoid(dot(transpose(w).subset(index(i)), X.subset(index(i))) + b)