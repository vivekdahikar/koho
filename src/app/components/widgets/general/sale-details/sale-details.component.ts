import { Component } from '@angular/core';
import * as data from '../../../../shared/data/components/dashboard/widgest/general/general';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.scss'],
})
export class SaleDetailsComponent {
  icon: any;
  // data
  public saleDetails = data.saleDetails;
  constructor() {}
}
