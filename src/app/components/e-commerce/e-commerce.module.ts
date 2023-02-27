import { NgModule } from '@angular/core';
import {
  AsyncPipe,
  CommonModule,
  DecimalPipe,
  NgFor,
  NgIf,
} from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './product/filter/filter.component';
import { ProductOxComponent } from './product/product-ox/product-ox.component';
import {
  NgbActiveModal,
  NgbModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { QuickViewComponent } from './product/quick-view/quick-view.component';
import { OrderHistoryService } from 'src/app/shared/service/product/order-history.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ProductPageComponent } from './product-page/product-page.component';
import { DetailsComponent } from './product-page/details/details.component';
import { BrandComponent } from './product-page/brand/brand.component';
import { DescriptionTabComponent } from './product-page/description-tab/description-tab.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SizeImageComponent } from './add-product/size-image/size-image.component';
import { DescriptionCategoryComponent } from './add-product/description-category/description-category.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CodComponent } from './payment-details/cod/cod.component';
import { CreditCardComponent } from './payment-details/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-details/debit-card/debit-card.component';
import { EmiComponent } from './payment-details/emi/emi.component';
import { NetBankingComponent } from './payment-details/net-banking/net-banking.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillingDetailsComponent } from './checkout/billing-details/billing-details.component';
import { PlaceOrderComponent } from './checkout/place-order/place-order.component';
import { PricingComponent } from './pricing/pricing.component';
import { NgbdSortableHeader } from 'src/app/shared/directive/sortable.directive';
import { productService } from 'src/app/shared/service/product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { InvoiceDataTableComponent } from './invoice/invoice-data-table/invoice-data-table.component';

@NgModule({
  declarations: [
    ProductComponent,
    FilterComponent,
    ProductOxComponent,
    QuickViewComponent,
    ProductPageComponent,
    DetailsComponent,
    BrandComponent,
    DescriptionTabComponent,
    AddProductComponent,
    SizeImageComponent,
    DescriptionCategoryComponent,
    PaymentDetailsComponent,
    CodComponent,
    CreditCardComponent,
    DebitCardComponent,
    EmiComponent,
    NetBankingComponent,
    OrderHistoryComponent,
    InvoiceComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    BillingDetailsComponent,
    PlaceOrderComponent,
    PricingComponent,
    ProductListComponent,
    InvoiceDataTableComponent,
  ],
  providers: [NgbActiveModal, productService, OrderHistoryService],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    SharedModule,
    NgbModule,
    NgbTypeaheadModule,
    NgFor,
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    NgbTypeaheadModule,
    NgbdSortableHeader,
    NgbPaginationModule,
    NgIf,
    NgxPrintModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    GalleryModule,
  ],
})
export class ECommerceModule {}
