import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiKitsRoutingModule } from './ui-kits-routing.module';
import { TypographyComponent } from './typography/typography.component';
import { TextElementsComponent } from './typography/text-elements/text-elements.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { ListingTypographyComponent } from './typography/listing-typography/listing-typography.component';
import { DisplayHeadingsComponent } from './typography/display-headings/display-headings.component';
import { BlockquotesComponent } from './typography/blockquotes/blockquotes.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToasterComponent } from './toaster/toaster.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagAndPillsComponent } from './tag-and-pills/tag-and-pills.component';
import { TabsComponent } from './tabs/tabs.component';
import { LineTabsComponent } from './tabs/line-tabs/line-tabs.component';
import { BootstrapTabsComponent } from './tabs/bootstrap-tabs/bootstrap-tabs.component';
import { StyleRightTabComponent } from './tabs/line-tabs/style-right-tab/style-right-tab.component';
import { StyleLeftTabComponent } from './tabs/line-tabs/style-left-tab/style-left-tab.component';
import { SimpleStyleBottomTabComponent } from './tabs/line-tabs/simple-style-bottom-tab/simple-style-bottom-tab.component';
import { SimpleMaterialStyleComponent } from './tabs/line-tabs/simple-material-style/simple-material-style.component';
import { MaterialStyleLeftTabComponent } from './tabs/line-tabs/material-style-left-tab/material-style-left-tab.component';
import { MaterialStyleRightTabComponent } from './tabs/line-tabs/material-style-right-tab/material-style-right-tab.component';
import { ColorTabsComponent } from './tabs/line-tabs/color-tabs/color-tabs.component';
import { BasicTabsComponent } from './tabs/bootstrap-tabs/basic-tabs/basic-tabs.component';
import { PillDarkColorComponent } from './tabs/bootstrap-tabs/pill-dark-color/pill-dark-color.component';
import { PillTabsComponent } from './tabs/bootstrap-tabs/pill-tabs/pill-tabs.component';
import { PillTabsWithIconComponent } from './tabs/bootstrap-tabs/pill-tabs-with-icon/pill-tabs-with-icon.component';
import { PrimaryColorComponent } from './tabs/bootstrap-tabs/primary-color/primary-color.component';
import { TabsButtonLeftAlignComponent } from './tabs/bootstrap-tabs/tabs-button-left-align/tabs-button-left-align.component';
import { TabsRightAlignComponent } from './tabs/bootstrap-tabs/tabs-right-align/tabs-right-align.component';
import { TabsVerticalComponent } from './tabs/bootstrap-tabs/tabs-vertical/tabs-vertical.component';
import { TabsWithIconComponent } from './tabs/bootstrap-tabs/tabs-with-icon/tabs-with-icon.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ProgressComponent } from './progress/progress.component';
import { BarsAnimatedComponent } from './progress/bars-animated/bars-animated.component';
import { BarsStripedComponent } from './progress/bars-striped/bars-striped.component';
import { MultipleBarsComponent } from './progress/multiple-bars/multiple-bars.component';
import { ProgressBarsComponent } from './progress/progress-bars/progress-bars.component';
import { PopoverComponent } from './popover/popover.component';
import { ModalComponent } from './modal/modal.component';
import { BasicModalComponent } from './modal/basic-modal/basic-modal.component';
import { StaticExampleComponent } from './modal/static-example/static-example.component';
import { ListsComponent } from './lists/lists.component';
import { ContextualClassesComponent } from './lists/contextual-classes/contextual-classes.component';
import { CustomContentComponent } from './lists/custom-content/custom-content.component';
import { DefaultListComponent } from './lists/default-list/default-list.component';
import { FlushStyleComponent } from './lists/flush-style/flush-style.component';
import { JavascriptBehaviorComponent } from './lists/javascript-behavior/javascript-behavior.component';
import { LinkButtonComponent } from './lists/link-button/link-button.component';
import { WithBadgesComponent } from './lists/with-badges/with-badges.component';
import { WithIconComponent } from './lists/with-icon/with-icon.component';
import { WithImagesComponent } from './lists/with-images/with-images.component';
import { WithImagesRoudedComponent } from './lists/with-images-rouded/with-images-rouded.component';
import { HelpersClassesComponent } from './helpers-classes/helpers-classes.component';
import { GridComponent } from './grid/grid.component';
import { GridColumnComponent } from './grid/grid-column/grid-column.component';
import { GridOptionComponent } from './grid/grid-option/grid-option.component';
import { HorizontalAlignmentComponent } from './grid/horizontal-alignment/horizontal-alignment.component';
import { NestingColumnComponent } from './grid/nesting-column/nesting-column.component';
import { OffsetComponent } from './grid/offset/offset.component';
import { OrderComponent } from './grid/order/order.component';
import { RowColumnComponent } from './grid/row-column/row-column.component';
import { VerticalAlignmentComponent } from './grid/vertical-alignment/vertical-alignment.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownButtonComponentComponent } from './dropdown/dropdown-button-component/dropdown-button-component.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { AlertComponent } from './alert/alert.component';
import { AdditionalContentComponent } from './alert/additional-content/additional-content.component';
import { AlertIconInverseComponent } from './alert/alert-icon-inverse/alert-icon-inverse.component';
import { AlertIconOutlineComponent } from './alert/alert-icon-outline/alert-icon-outline.component';
import { AlertWithIconComponent } from './alert/alert-with-icon/alert-with-icon.component';
import { ColorAlertsComponent } from './alert/color-alerts/color-alerts.component';
import { DismissingComponent } from './alert/dismissing/dismissing.component';
import { DismissingLightComponent } from './alert/dismissing-light/dismissing-light.component';
import { LinkColorComponent } from './alert/link-color/link-color.component';
import { LinkThemeColorComponent } from './alert/link-theme-color/link-theme-color.component';
import { OutlineAlertsComponent } from './alert/outline-alerts/outline-alerts.component';
import { OutlineDarkAlertsComponent } from './alert/outline-dark-alerts/outline-dark-alerts.component';
import { TextAsActionComponent } from './alert/text-as-action/text-as-action.component';
import { AccordingComponent } from './according/according.component';
import { AccordionTitleIconComponent } from './according/accordion-title-icon/accordion-title-icon.component';
import { AllCloseAccordionComponent } from './according/all-close-accordion/all-close-accordion.component';
import { BasicAccordionComponent } from './according/basic-accordion/basic-accordion.component';
import { ColorAccordionComponent } from './according/color-accordion/color-accordion.component';
import { IconOpenCloseIconComponent } from './according/icon-open-close-icon/icon-open-close-icon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TypographyComponent,
    TextElementsComponent,
    HeadingsComponent,
    ListingTypographyComponent,
    DisplayHeadingsComponent,
    BlockquotesComponent,
    TooltipComponent,
    ToasterComponent,
    TagAndPillsComponent,
    TabsComponent,
    LineTabsComponent,
    BootstrapTabsComponent,
    StyleRightTabComponent,
    StyleLeftTabComponent,
    SimpleStyleBottomTabComponent,
    SimpleMaterialStyleComponent,
    MaterialStyleLeftTabComponent,
    MaterialStyleRightTabComponent,
    ColorTabsComponent,
    BasicTabsComponent,
    PillDarkColorComponent,
    PillTabsComponent,
    PillTabsWithIconComponent,
    PrimaryColorComponent,
    TabsButtonLeftAlignComponent,
    TabsRightAlignComponent,
    TabsVerticalComponent,
    TabsWithIconComponent,
    SpinnersComponent,
    ProgressComponent,
    BarsAnimatedComponent,
    BarsStripedComponent,
    MultipleBarsComponent,
    ProgressBarsComponent,
    PopoverComponent,
    ModalComponent,
    BasicModalComponent,
    StaticExampleComponent,
    ListsComponent,
    ContextualClassesComponent,
    CustomContentComponent,
    DefaultListComponent,
    FlushStyleComponent,
    JavascriptBehaviorComponent,
    LinkButtonComponent,
    WithBadgesComponent,
    WithIconComponent,
    WithImagesComponent,
    WithImagesRoudedComponent,
    HelpersClassesComponent,
    GridComponent,
    GridColumnComponent,
    GridOptionComponent,
    HorizontalAlignmentComponent,
    NestingColumnComponent,
    OffsetComponent,
    OrderComponent,
    RowColumnComponent,
    VerticalAlignmentComponent,
    DropdownComponent,
    DropdownButtonComponentComponent,
    AvatarsComponent,
    AlertComponent,
    AdditionalContentComponent,
    AlertIconInverseComponent,
    AlertIconOutlineComponent,
    AlertWithIconComponent,
    ColorAlertsComponent,
    DismissingComponent,
    DismissingLightComponent,
    LinkColorComponent,
    LinkThemeColorComponent,
    OutlineAlertsComponent,
    OutlineDarkAlertsComponent,
    TextAsActionComponent,
    AccordingComponent,
    AccordionTitleIconComponent,
    AllCloseAccordionComponent,
    BasicAccordionComponent,
    ColorAccordionComponent,
    IconOpenCloseIconComponent,
  ],
  imports: [CommonModule, UiKitsRoutingModule, SharedModule, NgbModule],
})
export class UiKitsModule {}
