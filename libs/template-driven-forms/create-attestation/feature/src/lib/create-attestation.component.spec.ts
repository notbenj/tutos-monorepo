import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAttestationComponent } from './create-attestation.component';

describe('CreateAttestationComponent', () => {
  let component: CreateAttestationComponent;
  let fixture: ComponentFixture<CreateAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAttestationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
