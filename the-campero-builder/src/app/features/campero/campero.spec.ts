import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import CamperoComponent from './campero'
import { CamperoService } from './services/campero.service';
import { Router } from '@angular/router';

describe('CamperoComponent', () => {
  let component: CamperoComponent;
  let router: Router;
  let service: CamperoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        CamperoComponent,
        CamperoService,
        {
          provide: Router,
          useValue: { navigate: vi.fn().mockResolvedValue(true) }
        }
      ]
    });
    component = TestBed.inject(CamperoComponent);
    router = TestBed.inject(Router);
    service = TestBed.inject(CamperoService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should validate that customer name has at least 3 characters', () => {
      // Arrange
      const invalidName = 'Jo';
      
      // Act
      component.customer.setValue(invalidName);

      // Assert
      expect(component.customer.hasError('minlength')).toBe(true);
      expect(component.customer.valid).toBe(false);

      // Act
      component.customer.setValue('John Doe');
      
      // Assert
      expect(component.customer.valid).toBe(true);
    });

  it('should initialize with base ingredients selected', () => {
    // Arrange
    // Act
    // Assert
    expect(component.camperoForm.controls.baseIngredients.value).toEqual({
      york: true,
      lettuce: true,
      tomato: true,
      mayo: true
    });
  });

  describe('addExtra()', () => {
    it('should add a new extra to the list', () => {
      // Arrange
      // Act
      component.addExtra('bacon');

      // Assert
      expect(component.extras.value).toContain('bacon');
    });

    it('should prevent adding the same extra', () => {
      // Arrange
      // Act
      component.addExtra('bacon');
      component.addExtra('bacon');

      // Assert
      expect(component.extras.length).toBe(1);
    });
  });

  describe('removeExtra()', () => {
    it('should remove an extra', () => {
      // Arrange
      // Act
      component.addExtra('bacon');
      component.removeExtra(0);
      // Assert
      expect(component.extras.length).toBe(0);
    });
  });

  describe('totalPrice', () => {
    it('should update when the campero changes', () => {
      // Arrange
      const ingredient = 'chicken';
      const expectedPrice = 9;

      // Act
      component.camperoForm.patchValue({ ingredient });

      // Assert
      expect(component.totalPrice()).toBe(expectedPrice);
    });

    it('should update when an extra is added', () => {
      // Arrange
      component.camperoForm.patchValue({ ingredient: 'chicken' });
      
      // Act: Añadimos Bacon (+0.90)
      component.addExtra('bacon');

      // Assert
      expect(component.totalPrice()).toBe(9.90);
    });
  });

  describe('onSubmit()', () => {
    it('should save the order and navigate when the form is valid', () => {
      // Arrange
      const serviceSpy = vi.spyOn(service, 'setOrder');
      component.camperoForm.patchValue({
        customerName: 'John Doe',
        ingredient: 'chicken'
      });

      // Act
      component.onSubmit();

      // Assert
      expect(serviceSpy).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/success']);
    });

    it('should mark form as touched if invalid', () => {
      // Act
      component.onSubmit();
      // Assert
      expect(component.camperoForm.touched).toBe(true);
      expect(router.navigate).not.toHaveBeenCalled();
    });
  });
});