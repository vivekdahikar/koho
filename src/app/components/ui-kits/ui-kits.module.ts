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
  ],
  imports: [CommonModule, UiKitsRoutingModule, SharedModule, NgbModule],
})
export class UiKitsModule {}
