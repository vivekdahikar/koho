import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { ScrollRevealComponent } from './scroll-reveal/scroll-reveal.component';
var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'animate',
        component: AnimateComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'scroll-reveal',
        component: ScrollRevealComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimationRoutingModule {}
