import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAttestationComponent } from './update-attestation.component';

describe('UpdateAttestationComponent', () => {
  let component: UpdateAttestationComponent;
  let fixture: ComponentFixture<UpdateAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAttestationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
