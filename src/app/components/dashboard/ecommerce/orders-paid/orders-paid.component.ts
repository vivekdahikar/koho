import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orders-paid',
  templateUrl: './orders-paid.component.html',
  styleUrls: ['./orders-paid.component.scss'],
})
export class OrdersPaidComponent {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
