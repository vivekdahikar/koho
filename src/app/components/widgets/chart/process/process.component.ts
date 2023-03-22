import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  orderStatus2 = chartData.orderStatus2;
}
