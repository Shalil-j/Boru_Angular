import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseDiscriptionComponent } from './date-wise-discription.component';

describe('DateWiseDiscriptionComponent', () => {
  let component: DateWiseDiscriptionComponent;
  let fixture: ComponentFixture<DateWiseDiscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWiseDiscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateWiseDiscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
