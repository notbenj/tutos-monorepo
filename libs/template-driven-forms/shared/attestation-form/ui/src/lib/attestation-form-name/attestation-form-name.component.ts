import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Attestation } from '@tutos-monorepo/template-driven-forms/shared/data-access';

@Component({
  selector: 'tutos-monorepo-attestation-form-name',
  templateUrl: './attestation-form-name.component.html',
  styleUrls: ['./attestation-form-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttestationFormNameComponent {
  @Input() attestation!: Attestation;
}
