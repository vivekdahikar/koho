import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { BoxedComponent } from './boxed/boxed.component';
import { RtlComponent } from './rtl/rtl.component';
import { DarkLayoutComponent } from './dark-layout/dark-layout.component';
import { HideNavComponent } from './hide-nav/hide-nav.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { FooterDarkComponent } from './footer-dark/footer-dark.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BoxedComponent,
    RtlComponent,
    DarkLayoutComponent,
    HideNavComponent,
    FooterLightComponent,
    FooterDarkComponent,
  ],
  imports: [CommonModule, PageLayoutRoutingModule, SharedModule],
})
export class PageLayoutModule {}
