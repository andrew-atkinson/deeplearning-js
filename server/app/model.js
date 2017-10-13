const optimize = require('./optimize')
const propagate = require('./propagate')
const predict = require('./predict')
const initializeWithZeros = require('./initializeWithZeros')

/**
 * combines initializeWithZeros, predict, propagate, optimize to predict
 * 
 * @param {any} Xtrain 
 * @param {any} Ytrain 
 * @param {any} Xtest 
 * @param {any} Ytest 
 * @param {number} [numIterations=2000] 
 * @param {number} [learningRate=0.5] 
 * @param {any} [printCost=False] 
 * @returns {Object} 
 */
module.exports = (Xtrain, Ytrain, Xtest, Ytest, numIterations = 2000, learningRate = 0.5, printCost = False) => {
  let w,
    b,
    parameters,
    grads,
    costs,
    YPredictionTest,
    YPredictionTrain

  [w, b] = initializeWithZeros(Xtrain.shape[0])
  [parameters, grads, costs] = optimize(w, b, Xtrain, Ytrain, numIterations, learningRate, printCost)

  w = parameters.w
  b = parameters.b

  YPredictionTest = predict(w, w, Xtest)
  YPredictionTrain = predict(w, b, Xtrain)

  return {
    costs,
    YPredictionTest,
    YPredictionTrain,
    w,
    b,
    learningRate,
    numIterations
  }
}