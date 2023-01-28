import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxedComponent } from './boxed/boxed.component';
import { DarkLayoutComponent } from './dark-layout/dark-layout.component';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { HideNavComponent } from './hide-nav/hide-nav.component';
import { RtlComponent } from './rtl/rtl.component';

var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'boxed',
        component: BoxedComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'Rtl',
        component: RtlComponent,
        data: { animation: [routingAnimation] },
      },

      {
        path: 'dark-layout',
        component: DarkLayoutComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'hide-nav',
        component: HideNavComponent,
        data: { animation: [routingAnimation] },
      },

      {
        path: 'footer-light',
        component: FooterLightComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'footer-dark',
        component: FooterDarkComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLayoutRoutingModule {}
