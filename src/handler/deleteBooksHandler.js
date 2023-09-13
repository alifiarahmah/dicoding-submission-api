const deleteBooksHandler = (request, h) => {
  const {bookId} = request.params;

  const idx = books.findIndex((book) => book.id === bookId);

  if (idx === -1) {
    return h
      .response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      })
      .code(404);
  }

  books.splice(idx, 1);

  return h
    .response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    })
    .code(200);
};

module.exports = deleteBooksHandler;
