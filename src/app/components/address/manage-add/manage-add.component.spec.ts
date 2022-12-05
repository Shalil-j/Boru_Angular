import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAddComponent } from './manage-add.component';

describe('ManageAddComponent', () => {
  let component: ManageAddComponent;
  let fixture: ComponentFixture<ManageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
