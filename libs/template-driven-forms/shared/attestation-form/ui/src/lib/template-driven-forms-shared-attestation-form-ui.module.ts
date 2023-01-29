import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AttestationFormNameComponent } from './attestation-form-name/attestation-form-name.component';
import { AttestationFormComponent } from './attestation-form/attestation-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [AttestationFormComponent, AttestationFormNameComponent],
  exports: [AttestationFormComponent],
})
export class TemplateDrivenFormsSharedAttestationFormUiModule {}
