import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';

import { HideNavComponent } from './hide-nav/hide-nav.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterFixedComponent } from './footer-fixed/footer-fixed.component';

@NgModule({
  declarations: [
    HideNavComponent,
    FooterLightComponent,
    FooterDarkComponent,
    FooterFixedComponent,
  ],
  imports: [CommonModule, PageLayoutRoutingModule, SharedModule],
})
export class PageLayoutModule {}
