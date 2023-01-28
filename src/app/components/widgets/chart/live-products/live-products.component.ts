import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-live-products',
  templateUrl: './live-products.component.html',
  styleUrls: ['./live-products.component.scss'],
})
export class LiveProductsComponent {
  public widget7 = chartData.widget7;
}
