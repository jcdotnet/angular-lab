import { TestBed } from "@angular/core/testing";
import { CamperoService } from "./campero.service";

const LOCAL_STORAGE_KEY = 'campero_order';

// https://angular.dev/guide/testing/services
describe('CamperoService', () => {
    let service: CamperoService;

    beforeEach(() => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);

        // https://vitest.dev/guide/mocking
        vi.spyOn(Storage.prototype, 'setItem');

        service = TestBed.inject(CamperoService)
    });

    describe('calculatePrice()', () => {
        it('should calculate the base price (3.50) + chicken (5.50)', () => {
            // Arrange
            const ingredient = 'chicken';
            const expected = 9;

            // Act
            const result = service.calculatePrice(ingredient, [], false);

            // Assert
            expect(result).toBe(expected);
        });

        it('should apply 20% discount when a valid promo is introduced', () => {
            // Arrange
            const ingredient = 'chicken';
            const expected = 7.2; // 9 * 0.8

            // Act
            const result = service.calculatePrice(ingredient, [], true);

            // Assert
            expect(result).toBeCloseTo(expected);
        });
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});