import { Component } from '@angular/core';
import * as data from '../../../../../shared/data/table/tableData';

@Component({
  selector: 'app-striped-row-inverse',
  templateUrl: './striped-row-inverse.component.html',
  styleUrls: ['./striped-row-inverse.component.scss'],
})
export class StripedRowInverseComponent {
  public table2 = data.table2;
}
