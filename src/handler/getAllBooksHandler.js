const getAllBooksHandler = (request, h) => {
  const {name, reading, finished} = request.query;

  let bookResult = [...books];

  if (name !== undefined) {
    bookResult = bookResult.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase()),
    );
  }
  if (reading !== undefined) {
    bookResult = bookResult.filter(
      (book) => book.reading === !!Number(reading),
    );
  }
  if (finished !== undefined) {
    bookResult = bookResult.filter(
      (book) => book.finished === !!Number(finished),
    );
  }

  return h
    .response({
      status: 'success',
      data: {
        books: bookResult.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    })
    .code(200);
};

module.exports = getAllBooksHandler;
