import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AttestationsActions, selectAllAttestations } from '@tutos-monorepo/template-driven-forms/attestations/data-access';

@Component({
  selector: 'tutos-monorepo-attestations',
  templateUrl: './attestations.component.html',
  styleUrls: ['./attestations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttestationsComponent implements OnInit {
  private store = inject(Store);
  attestations$ = this.store.select(selectAllAttestations);
    
  ngOnInit(): void {
      this.store.dispatch(AttestationsActions.init());
  }
}
