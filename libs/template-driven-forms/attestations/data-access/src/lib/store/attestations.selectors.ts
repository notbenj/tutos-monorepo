import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  Attestation_FEATURE_KEY,
  AttestationState,
  AttestationAdapter,
} from './attestations.reducer';

// Lookup the 'Attestation' feature state managed by NgRx
export const selectAttestationState = createFeatureSelector<AttestationState>(
  Attestation_FEATURE_KEY
);

const { selectAll, selectEntities } = AttestationAdapter.getSelectors();

export const selectAttestationLoaded = createSelector(
  selectAttestationState,
  (state: AttestationState) => state.loaded
);

export const selectAttestationError = createSelector(
  selectAttestationState,
  (state: AttestationState) => state.error
);

export const selectAllAttestations = createSelector(
  selectAttestationState,
  (state: AttestationState) => selectAll(state)
);

export const selectAttestationEntities = createSelector(
  selectAttestationState,
  (state: AttestationState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectAttestationState,
  (state: AttestationState) => state.selectedId
);

export const selectEntity = createSelector(
  selectAttestationEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
