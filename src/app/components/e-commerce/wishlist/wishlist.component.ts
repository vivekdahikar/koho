import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Products } from 'src/app/shared/model/product.model';
import { ProductboxService } from '../../../shared/service/product/productbox.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  listData: Products[] = [];

  constructor(
    public ProductService: ProductboxService,
    public config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  // whishlist data
  ngOnInit(): void {
    this.ProductService.products().subscribe((data) => {
      this.listData = data;
    });
  }
}
