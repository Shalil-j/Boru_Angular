import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderCarouselComponent } from './home-header-carousel.component';

describe('HomeHeaderCarouselComponent', () => {
  let component: HomeHeaderCarouselComponent;
  let fixture: ComponentFixture<HomeHeaderCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeaderCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeaderCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
