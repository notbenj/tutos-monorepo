import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AttestationsComponent } from './attestations.component';
import { TemplateDrivenFormsAttestationsFeatureRoutingModule } from './template-driven-forms-attestations-feature-routing.module';
import { TemplateDrivenFormsAttestationsDataAccessModule } from '@tutos-monorepo/template-driven-forms/attestations/data-access';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TemplateDrivenFormsAttestationsFeatureRoutingModule,
    TemplateDrivenFormsAttestationsDataAccessModule
  ],
  declarations: [AttestationsComponent],
})
export class TemplateDrivenFormsAttestationsFeatureModule {}
