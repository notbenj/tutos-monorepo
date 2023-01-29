import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  UPDATE_ATTESTATION_FEATURE_KEY,
  UpdateAttestationState,
} from './update-attestation.reducer';

// Lookup the 'UpdateAttestation' feature state managed by NgRx
export const selectUpdateAttestationState =
  createFeatureSelector<UpdateAttestationState>(UPDATE_ATTESTATION_FEATURE_KEY);

export const selectUpdateAttestation = createSelector(
  selectUpdateAttestationState,
  (state: UpdateAttestationState) => state.attestation
);

export const selectUpdateAttestationLoaded = createSelector(
  selectUpdateAttestationState,
  (state: UpdateAttestationState) => state.loaded
);
