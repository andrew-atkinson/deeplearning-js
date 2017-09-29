const math = require('mathjs')
const sigmoid = require('./sigmoid')

module.exports = function(x){
  return x.map(value => {
    console.log('here:', value)
    let s = sigmoid(value)
    return s * (1 - s)
  })
}