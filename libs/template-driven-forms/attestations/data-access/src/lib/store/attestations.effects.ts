import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { AttestationService } from '@tutos-monorepo/template-driven-forms/shared/data-access';
import { AttestationsActions, AttestationsAPIActions } from './attestations.actions';

@Injectable()
export class AttestationsEffects {
  private actions$ = inject(Actions);
  private attestationService = inject(AttestationService);

  onEnter$ = createEffect(() => this.actions$.pipe(
    ofType(AttestationsActions.init),
    switchMap(
      () => this.attestationService.getAttestation()
        .pipe(
          map((Attestation) => AttestationsAPIActions.loadAttestationsSuccess({ Attestation: Attestation }))
        )
    ),
    catchError((error) => {
      console.error('Error', error);
      return of(AttestationsAPIActions.loadAttestationsFailure({ error }));
    })
  ));
}
