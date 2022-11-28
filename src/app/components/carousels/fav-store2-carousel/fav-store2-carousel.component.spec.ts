import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavStore2CarouselComponent } from './fav-store2-carousel.component';

describe('FavStore2CarouselComponent', () => {
  let component: FavStore2CarouselComponent;
  let fixture: ComponentFixture<FavStore2CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavStore2CarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavStore2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
