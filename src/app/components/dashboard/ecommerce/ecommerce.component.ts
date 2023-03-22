import { Component, OnInit, Input } from '@angular/core';
import * as chartData from '../../../shared/data/widget/widget';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent {
  public salechart = chartData.salechart;

  public income = chartData.income;
  public orderchart = chartData.orderchart;

  public visitorchart = chartData.visitorchart;

  constructor() {}

  ngOnInit(): void {}
}
