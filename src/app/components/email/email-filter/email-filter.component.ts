import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-filter',
  templateUrl: './email-filter.component.html',
  styleUrls: ['./email-filter.component.scss'],
})
export class EmailFilterComponent implements OnInit {
  public open: boolean = false;
  constructor() {}

  openMenu() {
    this.open = !this.open;
  }
  ngOnInit(): void {}
}
