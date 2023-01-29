import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Attestation } from '@tutos-monorepo/template-driven-forms/shared/data-access';

export const AttestationsActions = createActionGroup({
  source: 'Attestations page',
  events: {
    'Init': emptyProps()
  }
});

export const AttestationsAPIActions = createActionGroup({
  source: 'Attestations API',
  events: {
    'Load attestations success': props<{ Attestation: Attestation[] }>(),
    'Load attestations failure': props<{ error: string }>()
  }
})