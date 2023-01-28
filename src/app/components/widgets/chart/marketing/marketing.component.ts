import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss'],
})
export class MarketingComponent {
  public widget4 = chartData.widget4;
}
