import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { BookListComponent } from './book-list';
import { selectStandsWithBooks } from '../../state/books.selectors';
import { BooksActions } from '../../state/books.actions';

describe(' BookList', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let store: MockStore;

  const standsWithBooks = [
    {
      id: '2',
      name: 'Generación del 22',
      books: [{ id: '1', title: 'La estación del perro', stock: 10 }]
    }
  ];

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [BookListComponent],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectStandsWithBooks, value: standsWithBooks }
          ]
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    fixture.detectChanges(); // needed to fire ngOnInit
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch BooksActions.enter on initialization', () => {
    // Arrange
    const dispatchSpy = vi.spyOn(store, 'dispatch');

    // Act
    component.ngOnInit();

    // Assert
    expect(dispatchSpy).toHaveBeenCalledWith(BooksActions.enter());
  });

  it('should dispatch sellBook action', () => {
    // Arrange
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    const bookId = '1';

    // Act
    component.onSell(bookId);

    // Assert
    expect(dispatchSpy).toHaveBeenCalledWith(BooksActions.sellBook({ bookId }));
  });

  it('should render the list of stands with books', () => {
    // Arrange
    //const standDe: DebugElement = fixture.debugElement;
    //const standEl: HTMLElement = standDe.nativeElement;

    // Act: beforeEach: detectChanges()
    // Assert
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toContain('Generación del 22');
  });

  it('should display "Agotado" and disable button when stock is 0', () => {
    // Arrange
    const standsWithNoStock = [{
      id: '2', name: 'Generación del 22', location: 'Paso del Parque',
      books: [
        { id: '1', author: 'Carlos Naza', title: 'La estación del perro', year: 2024, stock: 0, standId: '2' }
      ]
    }];
    store.overrideSelector(selectStandsWithBooks, standsWithNoStock);
    store.refreshState(); // updates the state data stream (Observable) 
    fixture.detectChanges(); // sync with view

    // Act
    const button = fixture.nativeElement.querySelector('button');

    // Assert
    expect(button.disabled).toBe(true);
    expect(button.textContent).toContain('Agotado');
  });

});