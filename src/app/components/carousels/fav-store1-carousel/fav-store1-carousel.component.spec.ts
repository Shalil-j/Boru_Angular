import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavStore1CarouselComponent } from './fav-store1-carousel.component';

describe('FavStore1CarouselComponent', () => {
  let component: FavStore1CarouselComponent;
  let fixture: ComponentFixture<FavStore1CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavStore1CarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavStore1CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
