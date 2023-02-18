import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimateComponent } from './animate/animate.component';
import { Animate1Component } from './animate/animate1/animate1.component';
import { HowToUseComponent } from './animate/how-to-use/how-to-use.component';
import { ScrollRevealComponent } from './scroll-reveal/scroll-reveal.component';
import { ExampleComponent } from './scroll-reveal/example/example.component';
import { UseComponent } from './scroll-reveal/use/use.component';
import { SettingComponent } from './scroll-reveal/setting/setting.component';
import { NgsRevealModule } from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AnimateComponent,
    Animate1Component,
    HowToUseComponent,
    ScrollRevealComponent,
    ExampleComponent,
    UseComponent,
    SettingComponent,
  ],
  imports: [CommonModule, AnimationRoutingModule, NgsRevealModule],
})
export class AnimationModule {}
