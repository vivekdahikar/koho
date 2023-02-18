import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent {
  constructor() {}

  public configX: PerfectScrollbarConfigInterface = {
    suppressScrollX: false,
    suppressScrollY: true,
  };

  ngOnInit(): void {}
}
