import { Component } from '@angular/core';
import * as generalData from '../../../../shared//data/components/dashboard/widgest/general/general';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.scss'],
})
export class EmployeeStatusComponent {
  public employeeStatusData = generalData.employeeStatusData;
  constructor() {}
}
