import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.scss'],
})
export class ProfitComponent {
  public profit = chartData.profit;
}
