import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-total-value',
  templateUrl: './total-value.component.html',
  styleUrls: ['./total-value.component.scss'],
})
export class TotalValueComponent {
  public todayvalue = chartData.todayvalue;
}
