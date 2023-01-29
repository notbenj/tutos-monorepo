import { Attestation } from './update-attestation.models';
import {
  updateAttestationAdapter,
  UpdateAttestationPartialState,
  initialUpdateAttestationtate,
} from './update-attestation.reducer';
import * as UpdateAttestationelectors from './update-attestation.selectors';

describe('UpdateAttestation Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUpdateAttestationId = (it: Attestation) => it.id;
  const createAttestation = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Attestation);

  let state: UpdateAttestationPartialState;

  beforeEach(() => {
    state = {
      updateAttestation: updateAttestationAdapter.setAll(
        [
          createAttestation('PRODUCT-AAA'),
          createAttestation('PRODUCT-BBB'),
          createAttestation('PRODUCT-CCC'),
        ],
        {
          ...initialUpdateAttestationtate,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('UpdateAttestation Selectors', () => {
    it('selectAllUpdateAttestation() should return the list of UpdateAttestation', () => {
      const results =
        UpdateAttestationelectors.selectAllUpdateAttestation(state);
      const selId = getUpdateAttestationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = UpdateAttestationelectors.selectEntity(
        state
      ) as Attestation;
      const selId = getUpdateAttestationId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectUpdateAttestationLoaded() should return the current "loaded" status', () => {
      const result =
        UpdateAttestationelectors.selectUpdateAttestationLoaded(state);

      expect(result).toBe(true);
    });

    it('selectUpdateAttestationError() should return the current "error" state', () => {
      const result =
        UpdateAttestationelectors.selectUpdateAttestationError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
