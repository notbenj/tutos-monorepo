import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsShellFeatureRoutingModule } from './template-driven-forms-shell-feature-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer } from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule, 
    TemplateDrivenFormsShellFeatureRoutingModule, 
    StoreModule.forRoot({
      router: routerReducer,
    }), 
    EffectsModule.forRoot([]), 
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    })],
  exports: [TemplateDrivenFormsShellFeatureRoutingModule],
})
export class TemplateDrivenFormsShellFeatureModule { }
