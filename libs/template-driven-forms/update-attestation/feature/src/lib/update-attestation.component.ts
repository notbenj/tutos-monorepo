import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUpdateAttestation, selectUpdateAttestationLoaded, UpdateAttestationActions } from '@tutos-monorepo/template-driven-forms/update-attestation/data-access';
import { deepClone } from '@tutos-monorepo/shared/utils';
import { map } from 'rxjs';
import { AttestationForm } from '@tutos-monorepo/template-driven-forms/shared/attestation-form/data-access';

@Component({
  selector: 'tutos-monorepo-update-attestation',
  templateUrl: './update-attestation.component.html',
  styleUrls: ['./update-attestation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateAttestationComponent implements OnInit {
  private store = inject(Store);
  vm$ = this.store.select(selectUpdateAttestation)
    .pipe(
      map((updateAttestation) => deepClone({attestation: updateAttestation}) as AttestationForm)
    );
  loaded$ = this.store.select(selectUpdateAttestationLoaded);

  ngOnInit() {
    this.store.dispatch(UpdateAttestationActions.init());
  }  
}
