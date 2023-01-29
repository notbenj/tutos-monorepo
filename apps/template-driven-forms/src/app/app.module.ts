import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateDrivenFormsShellFeatureModule } from '@tutos-monorepo/template-driven-forms/shell/feature';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    TemplateDrivenFormsShellFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
