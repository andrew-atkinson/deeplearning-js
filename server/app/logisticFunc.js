const {dot, transpose, subset, index, tanh} = require('mathjs')
const sigmoid = require('./sigmoid')
const reLU = require('./reLU')
const leakyReLU = require('./leakyReLU')


/**
 * logistic function
 * 
 * @param {Matrix} w Weights
 * @param {Matrix} X An array of examples
 * @param {Number} b bias scalar
 * @param {function} func generalises the logistic function, adding a default parameter of sigmoid (can allow e.g. tanh, reLU, etc)
 * @returns {Number}
 */
module.exports = (w, X, b, func = sigmoid) => func(dot(transpose(w).subset(index(i)), X.subset(index(i))) + b)