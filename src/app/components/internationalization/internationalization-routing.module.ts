import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternationalizationComponent } from './internationalization.component';
var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    component: InternationalizationComponent,
    data: { animation: [routingAnimation] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternationalizationRoutingModule {}
