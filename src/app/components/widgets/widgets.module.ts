import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { GeneralComponent } from './general/general.component';
import { ChartComponent } from './chart/chart.component';
import { EarningComponent } from './general/earning/earning.component';
import { SaleDetailsComponent } from './general/sale-details/sale-details.component';
import { OrderDetailsComponent } from './general/order-details/order-details.component';
import { WeatherComponent } from './general/weather/weather.component';
import { FeedbackComponent } from './general/feedback/feedback.component';
import { ManagerComponent } from './general/manager/manager.component';
import { RecentActivityComponent } from './general/recent-activity/recent-activity.component';
import { KelvinComponent } from './general/kelvin/kelvin.component';
import { NewOrderComponent } from './general/new-order/new-order.component';
import { BrowserComponent } from './general/browser/browser.component';
import { SocialComponent } from './general/social/social.component';
import { EmployeeStatusComponent } from './general/employee-status/employee-status.component';
import { AprilComponent } from './general/april/april.component';
import { ContactUsComponent } from './general/contact-us/contact-us.component';
import { SaleComponent } from './chart/sale/sale.component';
import { MarketingComponent } from './chart/marketing/marketing.component';
import { TotalEarningComponent } from './chart/total-earning/total-earning.component';
import { SkillStatusComponent } from './chart/skill-status/skill-status.component';
import { OrderStatusComponent } from './chart/order-status/order-status.component';
import { LiveProductsComponent } from './chart/live-products/live-products.component';
import { TurnoverComponent } from './chart/turnover/turnover.component';
import { MonthlySaleComponent } from './chart/monthly-sale/monthly-sale.component';
import { UsesComponent } from './chart/uses/uses.component';
import { BrowserUsesComponent } from './chart/browser-uses/browser-uses.component';
import { FinanceComponent } from './chart/finance/finance.component';
import { ProcessComponent } from './chart/process/process.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProductCartComponent } from './general/product-cart/product-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderComponent } from './general/calender/calender.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeneralComponent,
    ChartComponent,
    EarningComponent,
    SaleDetailsComponent,
    OrderDetailsComponent,
    WeatherComponent,
    FeedbackComponent,
    ManagerComponent,
    RecentActivityComponent,
    KelvinComponent,
    NewOrderComponent,
    BrowserComponent,
    SocialComponent,
    EmployeeStatusComponent,
    AprilComponent,
    ContactUsComponent,
    SaleComponent,
    CalenderComponent,

    MarketingComponent,
    TotalEarningComponent,
    SkillStatusComponent,
    OrderStatusComponent,
    LiveProductsComponent,
    TurnoverComponent,
    MonthlySaleComponent,
    UsesComponent,
    BrowserUsesComponent,
    FinanceComponent,
    ProcessComponent,

    ProductCartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NgApexchartsModule,
    WidgetsRoutingModule,
    SharedModule,
    NgbDatepickerModule,
    NgbModule,
    FormsModule,
  ],
})
export class WidgetsModule {}
