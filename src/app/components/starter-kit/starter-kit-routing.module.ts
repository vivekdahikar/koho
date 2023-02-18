import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePageComponent } from '../sample-page/sample-page.component';
import { StarterKitComponent } from './starter-kit.component';
var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    component: StarterKitComponent,
    data: { animation: [routingAnimation] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterKitRoutingModule {}
