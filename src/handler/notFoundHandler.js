const notFoundHandler = (request, h) => {
  return h
    .response({
      status: 'fail',
      message: 'Rute tidak ditemukan',
    })
    .code(404);
};

module.exports = notFoundHandler;
