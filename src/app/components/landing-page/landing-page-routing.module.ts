import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { animation: [routingAnimation] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
