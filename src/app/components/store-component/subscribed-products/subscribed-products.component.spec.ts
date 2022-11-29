import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedProductsComponent } from './subscribed-products.component';

describe('SubscribedProductsComponent', () => {
  let component: SubscribedProductsComponent;
  let fixture: ComponentFixture<SubscribedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
