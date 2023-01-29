import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as UpdateAttestationActions from './update-attestation.actions';
import { UpdateAttestationEffects } from './update-attestation.effects';

describe('UpdateAttestationEffects', () => {
  let actions: Observable<Action>;
  let effects: UpdateAttestationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        UpdateAttestationEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(UpdateAttestationEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: UpdateAttestationActions.initUpdateAttestation(),
      });

      const expected = hot('-a-|', {
        a: UpdateAttestationActions.loadUpdateAttestationuccess({
          updateAttestation: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
