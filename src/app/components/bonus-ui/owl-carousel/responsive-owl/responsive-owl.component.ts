import { Component } from '@angular/core';
import * as data from '../../../../shared/data/owl';

@Component({
  selector: 'app-responsive-owl',
  templateUrl: './responsive-owl.component.html',
  styleUrls: ['./responsive-owl.component.scss'],
})
export class ResponsiveOwlComponent {
  public owlcarousel1 = data?.owlcarousel1;
  public owlcarousel2ptions = data?.owlcarousel2ptions;
  constructor() {}
}
