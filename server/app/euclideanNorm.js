const math = require('mathjs')

module.exports = function (row) {
  let total = 0;
  if (row.length >= 1) 
    row.forEach(value => total += value * value)
  else 
    total = row
  return Math.sqrt(total)
}