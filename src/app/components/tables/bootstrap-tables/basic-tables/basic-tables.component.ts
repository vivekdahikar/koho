import { Component } from '@angular/core';
import * as data from '../../../../shared/data/table/tableData';
import * as tableData from '../../../../shared/data/table/sizing-tables';
import * as borderData from '../../../../shared/data/table/border-tables';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss'],
})
export class BasicTablesComponent {
  public contextual = data.contextual;
  public textOrBgUtilities = data.textOrBgUtilities;
  public table2 = data.table2;
  public table = data.table;
  public tablesXl = tableData.sizingTablesXl;
  public borderTableHorizontal = borderData.borderTableHorizontal;

  constructor() {}

  ngOnInit(): void {}
}
