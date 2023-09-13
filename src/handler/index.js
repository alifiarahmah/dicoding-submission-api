// Group all handler in one file to make it easier to import

const getAllBooksHandler = require('./getAllBooksHandler');
const getBookByIdHandler = require('./getBookByIdHandler');
const postBooksHandler = require('./postBooksHandler');
const putBooksHandler = require('./putBooksHandler');
const deleteBooksHandler = require('./deleteBooksHandler');
const notFoundHandler = require('./notFoundHandler');

module.exports = {
  getAllBooksHandler,
  getBookByIdHandler,
  postBooksHandler,
  putBooksHandler,
  deleteBooksHandler,
  notFoundHandler,
};
