import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildersRoutingModule } from './builders-routing.module';
import { FormBuilder1Component } from './form-builder1/form-builder1.component';
import { FormBuilder2Component } from './form-builder2/form-builder2.component';
import { PageBuilderComponent } from './page-builder/page-builder.component';
import { ButtonBuilderComponent } from './button-builder/button-builder.component';
import { InputComponent } from './form-builder1/input/input.component';
import { RadioCheckboxComponent } from './form-builder1/radio-checkbox/radio-checkbox.component';
import { SelectComponent } from './form-builder1/select/select.component';
import { ButtonsComponent } from './form-builder1/buttons/buttons.component';
import { ViewHtmlComponent } from './form-builder1/view-html/view-html.component';


@NgModule({
  declarations: [
    FormBuilder1Component,
    FormBuilder2Component,
    PageBuilderComponent,
    ButtonBuilderComponent,
    InputComponent,
    RadioCheckboxComponent,
    SelectComponent,
    ButtonsComponent,
    ViewHtmlComponent
  ],
  imports: [
    CommonModule,
    BuildersRoutingModule
  ]
})
export class BuildersModule { }
