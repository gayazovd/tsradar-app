import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportFormComponent } from './add-transport-form.component';

describe('AddTransportFormComponent', () => {
  let component: AddTransportFormComponent;
  let fixture: ComponentFixture<AddTransportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
