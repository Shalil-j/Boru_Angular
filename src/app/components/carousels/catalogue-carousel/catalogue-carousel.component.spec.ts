import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueCarouselComponent } from './catalogue-carousel.component';

describe('CatalogueCarouselComponent', () => {
  let component: CatalogueCarouselComponent;
  let fixture: ComponentFixture<CatalogueCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
