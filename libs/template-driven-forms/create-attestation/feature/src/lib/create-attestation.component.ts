import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AttestationForm } from '@tutos-monorepo/template-driven-forms/shared/attestation-form/data-access';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'tutos-monorepo-create-attestation',
  templateUrl: './create-attestation.component.html',
  styleUrls: ['./create-attestation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAttestationComponent {
  vm$: Observable<AttestationForm> = from([{ attestation: {id: '', name: ''} }]);
}
