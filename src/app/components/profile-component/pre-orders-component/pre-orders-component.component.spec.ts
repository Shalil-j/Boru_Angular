import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOrdersComponentComponent } from './pre-orders-component.component';

describe('PreOrdersComponentComponent', () => {
  let component: PreOrdersComponentComponent;
  let fixture: ComponentFixture<PreOrdersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreOrdersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOrdersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
