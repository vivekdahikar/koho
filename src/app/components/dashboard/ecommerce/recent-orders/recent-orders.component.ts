import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss'],
})
export class RecentOrdersComponent {
  public recentchart = chartData.recentchart;
}
