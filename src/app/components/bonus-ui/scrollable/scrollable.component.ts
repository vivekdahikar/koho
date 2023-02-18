import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.scss'],
})
export class ScrollableComponent {
  public disabled: boolean = false;

  constructor() {}

  ngOnInit() {}

  public config: PerfectScrollbarConfigInterface = {
    suppressScrollX: false,
    useBothWheelAxes: false,
  };

  public configBothSideScroll: PerfectScrollbarConfigInterface = {
    suppressScrollX: false,
  };
}
