import { Injectable } from '@angular/core';
import { delay, from } from 'rxjs';

import { Attestation } from './attestation.model';

const DELAY = 2000;

const attestations: Attestation[] = [
  { id: '1', name: 'attestation 1' },
  { id: '2', name: 'attestation 2' },
  { id: '3', name: 'attestation 3' },
  { id: '4', name: 'attestation 4' },
  { id: '5', name: 'attestation 5' },
];

@Injectable({ providedIn: 'root' })
export class AttestationService {
  getAttestation() {
    return from([attestations]).pipe(delay(DELAY));
  }

  getAttestationById(id: string) {
    const attestation = attestations.find(attestation => attestation.id === id) || attestations[0];
    return from([attestation]).pipe(delay(DELAY));
  }
}
