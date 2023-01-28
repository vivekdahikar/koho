import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-per-day-chart',
  templateUrl: './per-day-chart.component.html',
  styleUrls: ['./per-day-chart.component.scss'],
})
export class PerDayChartComponent {
  public daydata = chartData.daydata;
}
