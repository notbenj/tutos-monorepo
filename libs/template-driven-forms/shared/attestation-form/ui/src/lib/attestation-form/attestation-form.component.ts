import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AttestationForm } from '@tutos-monorepo/template-driven-forms/shared/attestation-form/data-access';
import { Attestation } from '@tutos-monorepo/template-driven-forms/shared/data-access';

@Component({
  selector: 'tutos-monorepo-attestation-form',
  templateUrl: './attestation-form.component.html',
  styleUrls: ['./attestation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttestationFormComponent {
  @Input() vm!: AttestationForm;
}
