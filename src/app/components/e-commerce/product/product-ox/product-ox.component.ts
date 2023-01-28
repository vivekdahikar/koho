import { ChangeDetectorRef, Component, Output, ViewChild } from '@angular/core';
import { ProductService } from '../../../../shared/service/product/product.service';
import { Products } from 'src/app/shared/model/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductBoxFilterService } from '../../../../shared/service/product/product-box-filter.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-ox',
  templateUrl: './product-ox.component.html',
  styleUrls: ['./product-ox.component.scss'],
})
export class ProductOxComponent {
  @Output() productDetail: any;

  product: string | any;
  listData: Products[] | any;

  sidebaron: boolean = false;
  show: boolean = false;
  open: boolean = false;
  public listView: boolean = false;

  constructor(
    private ProductService: ProductService,
    private modalService: NgbModal,
    private ProductBoxFilterService: ProductBoxFilterService,
    private cd: ChangeDetectorRef,
    public config: NgbRatingConfig
  ) {
    config.max = 5;
    config.readonly = true;
  }

  openMediaFilter() {
    if (this.show == false && this.sidebaron == false && this.open == false) {
      this.show = true;
      this.sidebaron = true;
      this.open = true;
    } else {
      this.show = false;
      this.sidebaron = false;
      this.open = false;
    }
  }

  openProductDetail(content: any, id: number) {
    this.modalService.open(content, { centered: true, size: 'lg' });
    this.ProductService.getProduct(id).subscribe((product) => {
      this.productDetail = product && product;
    });
  }

  ngOnInit() {
    this.ProductService.products().subscribe((data) => {
      this.listData = data;
      console.log('listData', this.listData);
    });
  }
}
