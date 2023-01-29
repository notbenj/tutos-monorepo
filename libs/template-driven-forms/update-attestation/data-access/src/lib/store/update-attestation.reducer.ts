import { createReducer, on } from '@ngrx/store';
import { Attestation } from '@tutos-monorepo/template-driven-forms/shared/data-access';
import { UpdateAttestationActions, UpdateAttestationAPIActions } from './update-attestation.actions';

export const UPDATE_ATTESTATION_FEATURE_KEY = 'updateAttestation';

export interface UpdateAttestationState {
  attestation: Attestation;
  loaded: boolean;
  error?: string | null;
}

export const initialState: UpdateAttestationState = {
  attestation: {},
  loaded: false,
  error: ''
};

export const updateAttestationReducer = createReducer(
  initialState,
  on(UpdateAttestationActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UpdateAttestationAPIActions.loadUpdateattestationSuccess, (_state, { updateAttestation }) => ({
    attestation: updateAttestation,
    loaded: true
  })),
  on(UpdateAttestationAPIActions.loadUpdateattestationFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
