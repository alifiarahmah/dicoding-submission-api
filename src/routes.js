const {
  getAllBooksHandler,
  getBookByIdHandler,
  postBooksHandler,
  putBooksHandler,
  deleteBooksHandler,
  notFoundHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: postBooksHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: putBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: notFoundHandler,
  },
];

module.exports = routes;
