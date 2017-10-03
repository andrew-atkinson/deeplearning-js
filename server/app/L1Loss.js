const {subtract, sum, abs} = require('mathjs')

/**
 * sums the absolute value of y - yhat (prediction - ground truth)
 * 
 * @param {vector} yhat 
 * @param {vector} y 
 * @returns {number}
 */
module.exports = (yhat, y) => sum(abs(subtract(y,yhat)))
