import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { WelcomeComponent } from './default/welcome/welcome.component';
import { YearlyChartComponent } from './default/yearly-chart/yearly-chart.component';
import { ActivityComponent } from './default/activity/activity.component';
import { TransactionComponent } from './default/transaction/transaction.component';
import { ValueComponent } from './default/value/value.component';
import { SocialMediaComponent } from './default/social-media/social-media.component';
import { UpgradeComponent } from './default/upgrade/upgrade.component';
import { ProfitComponent } from './default/profit/profit.component';
import { PerDayChartComponent } from './default/per-day-chart/per-day-chart.component';
import { OrdersPaidComponent } from './ecommerce/orders-paid/orders-paid.component';
import { RecentOrdersComponent } from './ecommerce/recent-orders/recent-orders.component';
import { TopProductsComponent } from './ecommerce/top-products/top-products.component';
import { SalesByCountriesComponent } from './ecommerce/sales-by-countries/sales-by-countries.component';
import { BestSellersComponent } from './ecommerce/best-sellers/best-sellers.component';
import { DiscountComponent } from './ecommerce/discount/discount.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { ReviewComponent } from './ecommerce/review/review.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TotalValueComponent } from './default/total-value/total-value.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GainChartComponent } from './default/gain-chart/gain-chart.component';
import { ProfitChartComponent } from './default/profit-chart/profit-chart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    DefaultComponent,
    EcommerceComponent,
    WelcomeComponent,
    YearlyChartComponent,
    ActivityComponent,
    TransactionComponent,
    ValueComponent,
    SocialMediaComponent,
    UpgradeComponent,
    ProfitComponent,
    PerDayChartComponent,

    OrdersPaidComponent,
    RecentOrdersComponent,
    TopProductsComponent,
    SalesByCountriesComponent,
    BestSellersComponent,
    DiscountComponent,
    ProductsComponent,
    ReviewComponent,
    TotalValueComponent,
    GainChartComponent,
    ProfitChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    SharedModule,
    CarouselModule,
  ],
  exports: [
    DefaultComponent,
    EcommerceComponent,
    WelcomeComponent,
    YearlyChartComponent,
    ActivityComponent,
    TransactionComponent,
    ValueComponent,
    SocialMediaComponent,
    UpgradeComponent,
    ProfitComponent,
    PerDayChartComponent,

    OrdersPaidComponent,

    RecentOrdersComponent,
    TopProductsComponent,
    SalesByCountriesComponent,
    BestSellersComponent,
    DiscountComponent,
    ProductsComponent,
    ReviewComponent,
    TotalValueComponent,
  ],
})
export class DashboardModule {}
