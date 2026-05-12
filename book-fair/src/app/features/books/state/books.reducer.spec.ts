import { booksReducer } from './books.reducer';
import { BooksActions } from './books.actions';
import { BooksState, Book, Stand } from '../models/book.model';

describe('Books Reducer', () => {

  const initialState: BooksState = {
    items: [],
    stands: [],
    loading: false,
    error: null
  };

  const book: Book = {
    id: '1',
    title: 'La estación del perro',
    author: 'Carlos Naza',
    year: 2024,
    stock: 10,
    standId: '2'
  };
  const stand: Stand = { id: '2', name: 'Asoc. Generación del 22', location: 'Paseo del Parque' };

  it('should set loading to true and reset error when entering the books page', () => {
    // Arrange
    // Act
    const action = BooksActions.enter();
    const state = booksReducer(initialState, action);

    // Assert
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should populate books and stands and stop loading on loadBooksSuccess', () => {
    // Arrange
    // Act
    const action = BooksActions.loadBooksSuccess({ books: [book], stands: [stand] });
    const state = booksReducer({ ...initialState, loading: true }, action);

    // Assert
    expect(state.items.length).toBe(1);
    expect(state.stands.length).toBe(1);
    expect(state.loading).toBe(false);
    expect(state.items[0].title).toBe('La estación del perro');
  });

  it('should decrement stock after selling a book', () => {
    // Arrange
    const prevState: BooksState = { ...initialState, items: [book] };
    const action = BooksActions.sellBook({ bookId: '1' });

    // Act
    const state = booksReducer(prevState, action);

    // Assert
    expect(state.items[0].stock).toBe(9);
    expect(state.items).not.toBe(prevState.items);
  });

  it('should increment stock when restocking a book', () => {
    // Arrange
    const stateWithBook: BooksState = { ...initialState, items: [book] };
    const action = BooksActions.restockBook({ bookId: '1', count: 5 });

    // Act
    const state = booksReducer(stateWithBook, action);

    // Assert
    expect(state.items[0].stock).toBe(15);
  });

});
