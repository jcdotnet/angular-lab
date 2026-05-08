export interface Stand {
  id: string;
  name: string;
  location: string; // Paseo del Parque, Caseta...
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number
  stock: number;
  standId: string;
}

export interface BooksState {
  items: Book[];
  stands: Stand[];
  loading: boolean;
  error: string | null;
}