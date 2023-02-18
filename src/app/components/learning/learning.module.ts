import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { DetailedCourseComponent } from './detailed-course/detailed-course.component';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { LearningListComponent } from './learning-list/learning-list.component';
import { CategoriesComponent } from './learning-filter/categories/categories.component';
import { FindeCourseComponent } from './learning-filter/finde-course/finde-course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BarRatingModule } from 'ngx-bar-rating';
import { UpcomingCoursesComponent } from './learning-filter/upcoming-courses/upcoming-courses.component';
import { BlogModule } from '../blog/blog.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DetailedCourseComponent,
    LearningFilterComponent,
    LearningListComponent,
    CategoriesComponent,
    FindeCourseComponent,
    UpcomingCoursesComponent,
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    SharedModule,
    BarRatingModule,
    BlogModule,
    NgbModule,
  ],
  exports: [
    UpcomingCoursesComponent,
    CategoriesComponent,
    LearningFilterComponent,
  ],
})
export class LearningModule {}
