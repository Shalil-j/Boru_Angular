import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsBillSummeryComponent } from './subs-bill-summery.component';

describe('SubsBillSummeryComponent', () => {
  let component: SubsBillSummeryComponent;
  let fixture: ComponentFixture<SubsBillSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsBillSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsBillSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
