import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTabNavbarComponent } from './previous-tab-navbar.component';

describe('PreviousTabNavbarComponent', () => {
  let component: PreviousTabNavbarComponent;
  let fixture: ComponentFixture<PreviousTabNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousTabNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousTabNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
