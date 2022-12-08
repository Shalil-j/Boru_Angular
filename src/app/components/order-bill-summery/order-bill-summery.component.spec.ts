import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBillSummeryComponent } from './order-bill-summery.component';

describe('OrderBillSummeryComponent', () => {
  let component: OrderBillSummeryComponent;
  let fixture: ComponentFixture<OrderBillSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBillSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderBillSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
