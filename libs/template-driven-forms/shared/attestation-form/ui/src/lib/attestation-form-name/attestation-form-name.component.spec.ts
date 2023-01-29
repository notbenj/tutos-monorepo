import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationFormNameComponent } from './attestation-form-name.component';

describe('AttestationFormNameComponent', () => {
  let component: AttestationFormNameComponent;
  let fixture: ComponentFixture<AttestationFormNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttestationFormNameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AttestationFormNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
