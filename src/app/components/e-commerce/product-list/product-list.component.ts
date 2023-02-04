import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { product } from '../../../shared/data/interface/product';
import { productService } from '../../../shared/service/product/product.service';
import {
  NgbdSortableHeader,
  SortEvent,
} from '../../../shared/directive/sortable.directive';

@Component({
  selector: 'app-product-list',

  templateUrl: './product-list.component.html',

  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$: Observable<product[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers:
    | QueryList<NgbdSortableHeader>
    | any;

  constructor(public service: productService) {
    this.products$ = service.products$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header: { sortable: string; direction: string }) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
