import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AttestationsComponent } from "./attestations.component";

export const routes: Route[] = [
  { path: '', pathMatch: 'full', component: AttestationsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplateDrivenFormsAttestationsFeatureRoutingModule {}