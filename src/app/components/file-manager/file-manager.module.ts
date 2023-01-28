import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileItemsComponent } from './file-items/file-items.component';
import { FileManagerSidebarComponent } from './file-manager-sidebar/file-manager-sidebar.component';
import { FileManagerComponent } from './file-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FileItemsComponent,
    FileManagerSidebarComponent,
    FileManagerComponent,
  ],
  imports: [CommonModule, FileManagerRoutingModule, SharedModule],
  exports: [FileItemsComponent, FileManagerSidebarComponent],
})
export class FileManagerModule {}
