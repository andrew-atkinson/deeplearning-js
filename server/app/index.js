const sigmoid = require('./sigmoid')
const ds = require('./sigmoidDerivative')
const imageToVector = require('./imageToVector')
const normalizeByRow = require('./normalizeByRow')
const euclideanNormRows = require('./euclideanNormRows')
const softMax = require('./softMax')
const L1Loss = require('./L1Loss')
const L2Loss = require('./L2Loss')
const math = require('mathjs')
const eNorm = require('./euclideanNorm')

let matrix1 = math.matrix([[1,2,3,4,5]])
let s = sigmoid(matrix1)
console.log('sigmoid:', s)

let deriv = ds(matrix1)
console.log('derivative', deriv)

let matrix2 = math.matrix(
      [[[ 0.67826139,  0.29380381],
        [ 0.90714982,  0.52835647],
        [ 0.4215251 ,  0.45017551]],

       [[ 0.92814219,  0.96677647],
        [ 0.85304703,  0.52351845],
        [ 0.19981397,  0.27417313]],

       [[ 0.60659855,  0.00533165],
        [ 0.10820313,  0.49978937],
        [ 0.34144279,  0.94630077]],

       [[ 0.60659855,  0.00533165],
        [ 0.10820313,  0.49978937],
        [ 0.34144279,  0.94630077]]])

let imageReshaped = imageToVector(matrix2)
console.log('imageReshape', imageReshaped)

let matrix3 = math.matrix([[1,2,3],[1,10,20,],[100,200,700]])
console.log('norm', euclideanNormRows(matrix3))

let matrix4 = math.matrix([
    [9, 2, 5, 0, 0],
    [7, 5, 0, 0 ,0]])
console.log('softMax', softMax(matrix4))

let yhat = math.matrix([[.9, 0.2, 0.1, .4, .9]])
let y = math.matrix([[1, 0, 0, 1, 1]])
console.log("L1Loss", L1Loss(yhat, y))


let yhat2 = math.matrix([.9, 0.2, 0.1, .4, .9])
let y2 = math.matrix([1, 0, 0, 1, 1])
console.log("L2Loss", L2Loss(yhat2, y2))