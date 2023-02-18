import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { BasicInitComponent } from './data-tables/basic-init/basic-init.component';
import { BasicTablesComponent } from './bootstrap-tables/basic-tables/basic-tables.component';
import { BasicTableComponent } from './bootstrap-tables/basic-tables/basic-table/basic-table.component';
import { BreckpointComponent } from './bootstrap-tables/basic-tables/breckpoint/breckpoint.component';
import { CaptionComponent } from './bootstrap-tables/basic-tables/caption/caption.component';
import { CommonBorderTableComponent } from './bootstrap-tables/basic-tables/common-border-table/common-border-table.component';
import { CommonSizingTableComponent } from './bootstrap-tables/basic-tables/common-sizing-table/common-sizing-table.component';
import { CustomWithHoverComponent } from './bootstrap-tables/basic-tables/custom-with-hover/custom-with-hover.component';
import { HeadOptionsComponent } from './bootstrap-tables/basic-tables/head-options/head-options.component';
import { HoverableRowsComponent } from './bootstrap-tables/basic-tables/hoverable-rows/hoverable-rows.component';
import { InversePrimaryBgComponent } from './bootstrap-tables/basic-tables/inverse-primary-bg/inverse-primary-bg.component';
import { InverseTableComponent } from './bootstrap-tables/basic-tables/inverse-table/inverse-table.component';
import { ResponsiveTablesComponent } from './bootstrap-tables/basic-tables/responsive-tables/responsive-tables.component';
import { StripedRowComponent } from './bootstrap-tables/basic-tables/striped-row/striped-row.component';
import { StripedRowInverseComponent } from './bootstrap-tables/basic-tables/striped-row-inverse/striped-row-inverse.component';
import { TextBgUtilitiesComponent } from './bootstrap-tables/basic-tables/text-bg-utilities/text-bg-utilities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContextualClassesComponent } from './bootstrap-tables/basic-tables/contextual-classes/contextual-classes.component';
import { NgbdSortableHeader } from 'src/app/shared/directive/sortable.directive';

@NgModule({
  declarations: [
    BasicInitComponent,
    BasicTablesComponent,
    BasicTableComponent,
    BreckpointComponent,
    CaptionComponent,
    CommonBorderTableComponent,
    CommonSizingTableComponent,

    CustomWithHoverComponent,
    HeadOptionsComponent,
    HoverableRowsComponent,
    InversePrimaryBgComponent,
    InverseTableComponent,
    ResponsiveTablesComponent,
    StripedRowComponent,
    StripedRowInverseComponent,
    TextBgUtilitiesComponent,
    ContextualClassesComponent,
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbdSortableHeader,
  ],
  exports: [BasicTablesComponent],
})
export class TablesModule {}
