const math = require('mathjs')

/**
 * basic tanh function, takes a number or mathjs matrix
 *
 * @param {any} input takes a number or matrix object
 * @returns {any} the same type as inputed either number or matrix
 */
module.exports = input => {
  let expZFunc = value => Math.exp(input)

  if (typeof input === 'number') {
    const expZ = expZFunc(input),
      expNegZ = expZFunc(-input)
    return (expZ - expNegZ) / (expZ + expNegZ)
  } else {
    return input.map(value => {
      const expZ = expZFunc(value),
        expNegZ = expZFunc(-value)
      return (expZ - expNegZ) / (expZ + expNegZ)
    })
  }
}

