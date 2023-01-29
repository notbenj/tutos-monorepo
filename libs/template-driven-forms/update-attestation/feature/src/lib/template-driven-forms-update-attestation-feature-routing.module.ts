import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UpdateAttestationComponent } from './update-attestation.component';

export const routes: Route[] = [
  { path: '', component: UpdateAttestationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormsUpdateAttestationFeatureRoutingModule {}
