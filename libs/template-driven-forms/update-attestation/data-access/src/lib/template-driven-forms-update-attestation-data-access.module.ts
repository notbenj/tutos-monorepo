import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UPDATE_ATTESTATION_FEATURE_KEY, updateAttestationReducer } from './store/update-attestation.reducer';
import { UpdateAttestationEffects } from './store/update-attestation.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(UPDATE_ATTESTATION_FEATURE_KEY, updateAttestationReducer),
    EffectsModule.forFeature([UpdateAttestationEffects]),
  ],
})
export class TemplateDrivenFormsUpdateAttestationDataAccessModule {}
