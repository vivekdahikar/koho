import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusUiRoutingModule } from './bonus-ui-routing.module';
import { SweetAlert2Component } from './sweet-alert2/sweet-alert2.component';

@NgModule({
  declarations: [SweetAlert2Component],
  imports: [CommonModule, BonusUiRoutingModule],
  exports: [SweetAlert2Component],
})
export class BonusUiModule {}
