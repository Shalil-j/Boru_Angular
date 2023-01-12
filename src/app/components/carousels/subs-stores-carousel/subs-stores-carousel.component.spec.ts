import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsStoresCarouselComponent } from './subs-stores-carousel.component';

describe('SubsStoresCarouselComponent', () => {
  let component: SubsStoresCarouselComponent;
  let fixture: ComponentFixture<SubsStoresCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsStoresCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsStoresCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
