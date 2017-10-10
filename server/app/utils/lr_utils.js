const hdf5 = require('hdf5').hdf5
const {matrix} = require('mathjs')
const numRows = require('./numRows')
const numColumns = require('./numColumns')
const {Access} = require('hdf5/lib/globals')

/**
 * turns the hdf5 dataset into matrices
 * @returns {Array} array of matrices, to be destructered by the importing function
 */
module.exports = () => {
  const train_dataset = new hdf5.File('datasets/train_catvnoncat.h5', Access.ACC_RDONLY)
  let train_set_x_orig = matrix(train_dataset['train_set_x'].slice())
  let train_set_y_orig = matrix(train_dataset['train_set_y'].slice())

  const test_dataset = new hdf5.File('datasets/test_catvnoncat.h5', Access.ACC_RDONLY)
  let test_set_x_orig = matrix(test_dataset['test_set_x'].slice())
  let test_set_y_orig = matrix(test_dataset['test_set_y'].slice())

  const classes = matrix(test_dataset['list_classes'].slice())

  train_set_y_orig.reshape((1, train_set_y_orig.shape[0]))
  test_set_y_orig.reshape((1, test_set_y_orig.shape[0]))

  return [train_set_x_orig, train_set_y_orig, test_set_x_orig, test_set_y_orig, classes]
}
