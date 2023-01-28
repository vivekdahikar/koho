import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-sales-by-countries',
  templateUrl: './sales-by-countries.component.html',
  styleUrls: ['./sales-by-countries.component.scss'],
})
export class SalesByCountriesComponent {
  public countrychart = chartData.countrychart;
}
