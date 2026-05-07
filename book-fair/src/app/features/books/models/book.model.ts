export interface Book {
  id: string;
  title: string;
  author: string;
  year: number
  stock: number;
}

export interface BooksState {
  items: Book[];
  loading: boolean;
  error: string | null;
}
