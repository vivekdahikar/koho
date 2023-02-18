import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  pagination = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
}
