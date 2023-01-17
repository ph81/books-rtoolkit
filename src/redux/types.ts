export type BookState = {
  bookId: string;
  title?: string;
  author?: string;
};

export type MutateBook = {
  title?: string;
  author?: string;
};

export type GenericResponse = {
  status: string;
  message: string;
};

export type BookResponse = {
  status: string;
  Book: BookState;
};

export type BooksResponse = {
  status: string;
  results: number;
  Books: BookState[];
};
