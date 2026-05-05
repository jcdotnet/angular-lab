import { TestBed } from '@angular/core/testing';
import SuccessComponent from './success';
import { CamperoService } from '../services/campero.service';
import { Router } from '@angular/router';

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
    component = TestBed.inject(SuccessComponent);
    service = TestBed.inject(CamperoService);
    router = TestBed.inject(Router);
  });

  it('should load the order from localStorage', () => {
    // Arrange
    const order = {
      customerName: 'Persistence Test',
      ingredient: 'chicken',
      extras: []
    };
    localStorage.setItem('campero_order', JSON.stringify(order));

    // Act
    TestBed.resetTestingModule();
    const testService = TestBed.inject(CamperoService);

    // Assert
    expect(testService.order()).toEqual(order);
  });

  it('should reset order and navigate to the builder', async () => {
    // Arrange
    const resetSpy = vi.spyOn(service, 'resetOrder');

    // Act
    await component.onNewOrder();

    // Assert
    expect(resetSpy).toHaveBeenCalled();
  });
});