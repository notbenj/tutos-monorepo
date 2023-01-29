import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { AttestationsActions, AttestationsAPIActions } from './attestations.actions';
import { Attestation } from '@tutos-monorepo/template-driven-forms/shared/data-access';

export const Attestation_FEATURE_KEY = 'attestations';

export interface AttestationState extends EntityState<Attestation> {
  selectedId?: string | number; // which Attestation record has been selected
  loaded: boolean; // has the Attestation list been loaded
  error?: string | null; // last known error (if any)
}

export interface AttestationPartialState {
  readonly [Attestation_FEATURE_KEY]: AttestationState;
}

export const AttestationAdapter: EntityAdapter<Attestation> =
  createEntityAdapter<Attestation>();

export const initialAttestationState: AttestationState =
  AttestationAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialAttestationState,
  on(AttestationsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AttestationsAPIActions.loadAttestationsSuccess, (state, { Attestation }) =>
    AttestationAdapter.setAll(Attestation, { ...state, loaded: true })
  ),
  on(AttestationsAPIActions.loadAttestationsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function AttestationsReducer(
  state: AttestationState | undefined,
  action: Action
) {
  return reducer(state, action);
}
