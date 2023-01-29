import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, withLatestFrom, map } from 'rxjs';
import { AttestationService, selectRouteParams } from '@tutos-monorepo/template-driven-forms/shared/data-access';
import { UpdateAttestationActions, UpdateAttestationAPIActions } from './update-attestation.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class UpdateAttestationEffects {
  private actions$ = inject(Actions);
  private attestationService = inject(AttestationService);
  private store = inject(Store);

  init$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UpdateAttestationActions.init),
      withLatestFrom(this.store.select(selectRouteParams)),
      switchMap(
        ([_, routeParams]) => this.attestationService.getAttestationById(routeParams['id'])
          .pipe(
            map((attestation) => UpdateAttestationAPIActions.loadUpdateattestationSuccess({ updateAttestation: attestation }))
          )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(UpdateAttestationAPIActions.loadUpdateattestationFailure({ error }));
      })
  ));
}
