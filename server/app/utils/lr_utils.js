const hdf5 = require('hdf5').hdf5
const {matrix} = require('mathjs')
const numRows = require('./numRows')
const numColumns = require('./numColumns')
const {Access} = require('hdf5/lib/globals')

export default () => {
    train_dataset = new hdf5.File('datasets/train_catvnoncat.h5', Access.ACC_RDONLY)
    train_set_x_orig = matrix(train_dataset["train_set_x"].slice()) 
    train_set_y_orig = matrix(train_dataset["train_set_y"].slice()) 

    test_dataset = new hdf5.File('datasets/test_catvnoncat.h5', Access.ACC_RDONLY)
    test_set_x_orig = matrix(test_dataset["test_set_x"].slice()) 
    test_set_y_orig = matrix(test_dataset["test_set_y"].slice())

    classes = matrix(test_dataset["list_classes"].slice())
    
    train_set_y_orig = train_set_y_orig.reshape((1, train_set_y_orig.shape[0]))
    test_set_y_orig = test_set_y_orig.reshape((1, test_set_y_orig.shape[0]))
    
    return [train_set_x_orig, train_set_y_orig, test_set_x_orig, test_set_y_orig, classes]
  }
