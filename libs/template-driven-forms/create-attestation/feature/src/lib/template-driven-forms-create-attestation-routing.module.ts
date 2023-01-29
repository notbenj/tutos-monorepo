import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CreateAttestationComponent } from './create-attestation.component';

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: CreateAttestationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormsCreateAttestationFeatureRoutingModule {}
