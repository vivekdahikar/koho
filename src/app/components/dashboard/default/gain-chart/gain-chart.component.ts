import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-gain-chart',
  templateUrl: './gain-chart.component.html',
  styleUrls: ['./gain-chart.component.scss'],
})
export class GainChartComponent {
  public gain = chartData.gain;
}
