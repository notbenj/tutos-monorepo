import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'attestations' },
  {
    path: 'attestations/create',
    loadChildren: async () => 
      (
        await import(
          '@tutos-monorepo/template-driven-forms/create-attestation/feature'
        )
      ).TemplateDrivenFormsCreateAttestationFeatureModule
  },
  {
    path: 'attestations/:id',
    loadChildren: async () => 
      (
        await import(
          '@tutos-monorepo/template-driven-forms/update-attestation/feature'
        )
      ).TemplateDrivenFormsUpdateAttestationFeatureModule
  },
  {
    path: 'attestations',
    loadChildren: async () =>
      (
        await import(
          '@tutos-monorepo/template-driven-forms/attestations/feature'
        )
      ).TemplateDrivenFormsAttestationsFeatureModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [RouterModule],
})
export class TemplateDrivenFormsShellFeatureRoutingModule {}
