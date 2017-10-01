const sigmoid = require('./sigmoid')
const ds = require('./sigmoidDerivative')
const imageToVector = require('./imageToVector')
const normalizeRows = require('./normalizeRows')
const math = require('mathjs')
const eNorm = require('./euclideanNorm')

/*let matrix = math.matrix([[1,2,3,4,5]])
let s = sigmoid(matrix)
console.log('sigmoid:', s)

let deriv = ds(matrix)
console.log('derivative', deriv)
*/

/*let matrix = math.matrix(
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

let imageReshaped = imageToVector(matrix)
console.log('imageReshape', imageReshaped)*/

let matrix = math.matrix([[1,2,3],[1,10,20,],[100,200,700]])
console.log("index", math.index([0], math.range(0, matrix.size()[1])))
console.log('norm', normalizeRows(matrix))