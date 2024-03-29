import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LanguageComponent } from './components/header/language/language.component';
import { ModeComponent } from './components/header/mode/mode.component';
import { BookmarkComponent } from './components/header/bookmark/bookmark.component';
import { NotificationComponent } from './components/header/notification/notification.component';
import { MessageBoxComponent } from './components/header/message-box/message-box.component';
import { MaximiseComponent } from './components/header/maximise/maximise.component';
import { SearchComponent } from './components/header/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ContentComponent } from './layout/content/content.component';
import { FullComponent } from './layout/full/full.component';
import { AccountComponent } from './components/header/account/account.component';
import { NavService } from './service/nav.service';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CustomizerComponent } from './components/customizer/customizer.component';
import { ColorComponent } from './components/customizer/color/color.component';
import { LayoutSettingComponent } from './components/customizer/layout-setting/layout-setting.component';
import { ProductboxService } from './service/product/productbox.service';
import { ProductBoxFilterService } from './service/product/product-box-filter.service';
import { TablesService } from './service/tables/tables.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutService } from './service/layout/layout.service';

@NgModule({
  declarations: [
    HeaderComponent,
    LanguageComponent,
    ModeComponent,
    BookmarkComponent,
    NotificationComponent,
    MessageBoxComponent,
    MaximiseComponent,
    SearchComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent,
    ContentComponent,
    FullComponent,
    AccountComponent,
    TapToTopComponent,
    FeatherIconComponent,
    BreadcrumbComponent,
    CustomizerComponent,
    ColorComponent,
    LayoutSettingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    LanguageComponent,
    ModeComponent,
    BookmarkComponent,
    NotificationComponent,
    MessageBoxComponent,
    MaximiseComponent,
    SearchComponent,
    FooterComponent,
    SidebarComponent,

    LoaderComponent,
    ContentComponent,
    FullComponent,
    AccountComponent,
    TapToTopComponent,
    FeatherIconComponent,
    BreadcrumbComponent,
  ],
  providers: [
    DecimalPipe,
    NavService,
    LayoutService,
    ProductboxService,
    ProductBoxFilterService,
  ],
})
export class SharedModule {}
