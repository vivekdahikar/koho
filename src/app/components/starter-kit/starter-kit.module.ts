import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { StarterKitRoutingModule } from './starter-kit-routing.module';
import { StarterKitComponent } from './starter-kit.component';
import { KickStartComponent } from './kick-start/kick-start.component';
import { WhatIsItComponent } from './what-is-it/what-is-it.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { SimpleCardComponent } from './simple-card/simple-card.component';
import { WithHeaderComponent } from './with-header/with-header.component';
import { NoBorderComponent } from './no-border/no-border.component';

@NgModule({
  declarations: [
    StarterKitComponent,
    KickStartComponent,
    WhatIsItComponent,
    HowToUseComponent,
    SimpleCardComponent,
    WithHeaderComponent,
    NoBorderComponent,
  ],
  imports: [CommonModule, StarterKitRoutingModule, SharedModule],
})
export class StarterKitModule {}
