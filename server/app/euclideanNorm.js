const math = require('mathjs')

module.exports = row => {
  let total = 0;
  if (row.size()[0] >= 1) 
    row.forEach(value => total += value * value)
  else 
    total = row * row
  return Math.sqrt(total)
}