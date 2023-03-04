import { Component } from '@angular/core';
import * as productData from '../../../../shared/data/dashboard/ecommerce';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss'],
})
export class TopProductsComponent {
  public TopProduct = productData.TopProduct;
}
