import { TestBed } from '@angular/core/testing';
import { CamperoService } from './campero.service';
import { CamperoOrder } from '../models/campero.model';

const LOCAL_STORAGE_KEY = 'campero_order';
const ORDER: CamperoOrder = {
  customerName: 'John Doe',
  bread: 'campero-bread',
  ingredient: 'chicken',
  toasting: 2,
  extras: ['cheese'],
  promoCode: ''
};

// https://angular.dev/guide/testing/services
describe('CamperoService', () => {
  let service: CamperoService;

  beforeEach(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);

    // https://vitest.dev/guide/mocking
    vi.spyOn(Storage.prototype, 'setItem');
    vi.spyOn(Storage.prototype, 'removeItem');

  });

  it('should be created', () => {
    // Arrange
    // Act: injecting in the test itself rather than in beforeEach
    service = TestBed.inject(CamperoService); 
    
    // Assert
    expect(service).toBeTruthy();
  });

  describe('Persistence', () => {
    it('should load the order from localStorage', () => {
      // Arrange
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ORDER));

      // Act
      service = TestBed.inject(CamperoService);

      // Assert
      expect(service.order()).toEqual(ORDER);
    });

    it('should save to localStorage when the order is updated', () => {
      // Arrange
      // Act
      service = TestBed.inject(CamperoService);
      service.setOrder(ORDER);

      // Assert
      expect(localStorage.setItem).toHaveBeenCalledWith(
        LOCAL_STORAGE_KEY,
        JSON.stringify(ORDER)
      );
    });

    it('should remove from localStorage when the order is reset', () => {
      // Act
      service = TestBed.inject(CamperoService);
      service.resetOrder();

      // Assert
      expect(localStorage.removeItem).toHaveBeenCalledWith(LOCAL_STORAGE_KEY);
    });
  });

  describe('calculatePrice()', () => {
    it('should calculate the base price (3.50) + chicken (5.50)', () => {
      // Arrange
      const ingredient = 'chicken';
      const expected = 9;

      // Act
      service = TestBed.inject(CamperoService);
      const result = service.calculatePrice(ingredient, [], false);

      // Assert
      expect(result).toBe(expected);
    });

    it('should apply 20% discount when a valid promo is introduced', () => {
      // Arrange
      const ingredient = 'chicken';
      const expected = 7.2; // 9 * 0.8

      // Act
      service = TestBed.inject(CamperoService);
      const result = service.calculatePrice(ingredient, [], true);

      // Assert
      expect(result).toBeCloseTo(expected);
    });
  });

});