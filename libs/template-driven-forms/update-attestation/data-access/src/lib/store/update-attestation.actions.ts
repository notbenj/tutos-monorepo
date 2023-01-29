import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Attestation } from '@tutos-monorepo/template-driven-forms/shared/data-access';

export const UpdateAttestationActions = createActionGroup({
  source: 'Update attestation page',
  events: {
    'Init': emptyProps()
  }
});

export const UpdateAttestationAPIActions = createActionGroup({
  source: 'Update attestation API',
  events: {
    'Load UpdateAttestation Success': props<{ updateAttestation: Attestation }>(),
    'Load UpdateAttestation Failure': props<{ error: string }>()
  }
});
