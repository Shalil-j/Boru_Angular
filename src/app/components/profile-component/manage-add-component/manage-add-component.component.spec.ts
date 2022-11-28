import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAddComponentComponent } from './manage-add-component.component';

describe('ManageAddComponentComponent', () => {
  let component: ManageAddComponentComponent;
  let fixture: ComponentFixture<ManageAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAddComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
