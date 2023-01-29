import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAttestation from './store/attestations.reducer';
import { AttestationsEffects } from './store/attestations.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAttestation.Attestation_FEATURE_KEY,
      fromAttestation.AttestationsReducer
    ),
    EffectsModule.forFeature([AttestationsEffects]),
  ],
})
export class TemplateDrivenFormsAttestationsDataAccessModule {}
