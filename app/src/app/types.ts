export type BooksDTO = {
  error: string;
  total: string;
  books: Book[];
};

export type Book = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

export type CartItem = {
  book: Book;
  quantity: number;
};
