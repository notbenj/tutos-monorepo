import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsUpdateAttestationFeatureRoutingModule } from './template-driven-forms-update-attestation-feature-routing.module';
import { TemplateDrivenFormsSharedAttestationFormUiModule } from '@tutos-monorepo/template-driven-forms/shared/attestation-form/ui';
import { UpdateAttestationComponent } from './update-attestation.component';
import { TemplateDrivenFormsUpdateAttestationDataAccessModule } from '@tutos-monorepo/template-driven-forms/update-attestation/data-access';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenFormsUpdateAttestationFeatureRoutingModule,
    TemplateDrivenFormsSharedAttestationFormUiModule,
    TemplateDrivenFormsUpdateAttestationDataAccessModule
  ],
  declarations: [
    UpdateAttestationComponent
  ]
})
export class TemplateDrivenFormsUpdateAttestationFeatureModule {}
