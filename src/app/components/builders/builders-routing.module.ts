import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonBuilderComponent } from './button-builder/button-builder.component';
import { FormBuilder1Component } from './form-builder1/form-builder1.component';
import { FormBuilder2Component } from './form-builder2/form-builder2.component';
import { PageBuilderComponent } from './page-builder/page-builder.component';
var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form-builder1',
        component: FormBuilder1Component,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'form-builder2',
        component: FormBuilder2Component,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'page-builder',
        component: PageBuilderComponent,
        data: { animation: [routingAnimation] },
      },

      {
        path: 'button-builder',
        component: ButtonBuilderComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildersRoutingModule {}
