import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAttestationComponent } from './create-attestation.component';
import { TemplateDrivenFormsCreateAttestationFeatureRoutingModule } from './template-driven-forms-create-attestation-routing.module';
import { TemplateDrivenFormsSharedAttestationFormUiModule } from '@tutos-monorepo/template-driven-forms/shared/attestation-form/ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateDrivenFormsCreateAttestationFeatureRoutingModule,
    TemplateDrivenFormsSharedAttestationFormUiModule
  ],
  declarations: [CreateAttestationComponent],
})
export class TemplateDrivenFormsCreateAttestationFeatureModule {}
