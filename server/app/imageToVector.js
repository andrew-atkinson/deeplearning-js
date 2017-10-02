const {reshape, size} = require('mathjs')

/**
 * transforms a 3d matrix into a 1 dimensional vector for processing
 * @param {matrix} image takes a 3D matrix
 * @returns a 1d vector
 */
module.exports = image => reshape(image, [image.size()[0] * image.size()[1] * image.size()[2]])
