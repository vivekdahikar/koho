import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [ProjetListComponent, CreateNewComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    NgxDropzoneModule,
  ],
})
export class ProjectModule {}
