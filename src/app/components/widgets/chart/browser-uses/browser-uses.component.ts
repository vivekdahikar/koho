import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-browser-uses',
  templateUrl: './browser-uses.component.html',
  styleUrls: ['./browser-uses.component.scss'],
})
export class BrowserUsesComponent {
  public widget10 = chartData.widget10;
}
