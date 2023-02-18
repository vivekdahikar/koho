import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternationalizationRoutingModule } from './internationalization-routing.module';
import { InternationalizationComponent } from './internationalization.component';
import { UseItComponent } from './use-it/use-it.component';
import { AddLanguageComponent } from './add-language/add-language.component';


@NgModule({
  declarations: [
    InternationalizationComponent,
    UseItComponent,
    AddLanguageComponent
  ],
  imports: [
    CommonModule,
    InternationalizationRoutingModule
  ]
})
export class InternationalizationModule { }
