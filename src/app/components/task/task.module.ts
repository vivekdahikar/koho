import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskTabComponent } from './task-tab/task-tab.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { ModalComponent } from './modal/modal.component';
import { NewTaskComponent } from './modal/new-task/new-task.component';
import { TaskTagsComponent } from './modal/task-tags/task-tags.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TaskComponent,
    TaskTabComponent,
    TaskFilterComponent,
    ModalComponent,
    NewTaskComponent,
    TaskTagsComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule
  ]
})
export class TaskModule { }
