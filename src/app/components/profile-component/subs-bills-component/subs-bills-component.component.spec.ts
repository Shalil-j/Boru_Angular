import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsBillsComponentComponent } from './subs-bills-component.component';

describe('SubsBillsComponentComponent', () => {
  let component: SubsBillsComponentComponent;
  let fixture: ComponentFixture<SubsBillsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsBillsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsBillsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
