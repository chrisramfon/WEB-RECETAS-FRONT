import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformuComponent } from './editformu.component';

describe('EditformuComponent', () => {
  let component: EditformuComponent;
  let fixture: ComponentFixture<EditformuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditformuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
