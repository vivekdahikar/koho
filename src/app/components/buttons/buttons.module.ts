import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultStyleComponent } from './default-style/default-style.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

@NgModule({
  declarations: [DefaultStyleComponent, ButtonGroupComponent],
  imports: [CommonModule, ButtonsRoutingModule, SharedModule],
})
export class ButtonsModule {}
