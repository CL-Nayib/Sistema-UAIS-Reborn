import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAppointmentsComponent } from './medical-appointments.component';

describe('MedicalAppointmentsComponent', () => {
  let component: MedicalAppointmentsComponent;
  let fixture: ComponentFixture<MedicalAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalAppointmentsComponent]
    });
    fixture = TestBed.createComponent(MedicalAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
