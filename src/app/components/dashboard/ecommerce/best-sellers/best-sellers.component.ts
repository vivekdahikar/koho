import { Component } from '@angular/core';
import * as productData from '../../../../shared/data/dashboard/ecommerce';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss'],
})
export class BestSellersComponent {
  public BestSellers = productData.BestSellers;
}
