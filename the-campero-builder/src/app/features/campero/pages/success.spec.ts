import { TestBed } from '@angular/core/testing';
import SuccessComponent from './success';
import { CamperoService } from '../services/campero.service';
import { Router } from '@angular/router';
import { CamperoOrder } from '../models/campero.model';

const ORDER: CamperoOrder = {
  customerName: 'John Doe',
  bread: 'campero-bread',
  ingredient: 'chicken',
  toasting: 2,
  extras: ['cheese'],
  promoCode: ''
};

// https://angular.dev/guide/testing/components-basics
describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let service: CamperoService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SuccessComponent,
        CamperoService,
        {
          provide: Router,
          useValue: { navigate: vi.fn().mockResolvedValue(true) }
        }
      ]
    });
    service = TestBed.inject(CamperoService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    // Arrange
    service.order.set(ORDER);
    
    // Act
    component = TestBed.inject(SuccessComponent);
    
    // Assert
    expect(component).toBeTruthy();
  });

  it('should navigate back to builder if no order exists', () => {
    // Arrange
    service.order.set(null);

    // Act
    TestBed.inject(SuccessComponent);

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/builder']);
  });

  it('should reset order and navigate to the builder', async () => {
    // Arrange
    service.order.set(ORDER);
    component = TestBed.inject(SuccessComponent);
    const resetSpy = vi.spyOn(service, 'resetOrder');

    // Act
    await component.onNewOrder();

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/builder']);
    expect(resetSpy).toHaveBeenCalled();
  });
});