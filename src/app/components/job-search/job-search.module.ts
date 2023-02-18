import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { ApplyComponent } from './apply/apply.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobApplyComponent } from './job-details/job-apply/job-apply.component';
import { EducationComponent } from './apply/education/education.component';
import { ExperienceComponent } from './apply/experience/experience.component';
import { PersonalDetailsComponent } from './apply/personal-details/personal-details.component';
import { UploadFilesComponent } from './apply/upload-files/upload-files.component';
import { CardsViewComponent } from './cards-view/cards-view.component';

@NgModule({
  declarations: [
    ApplyComponent,
    JobDetailsComponent,
    JobFilterComponent,
    ListViewComponent,
    JobApplyComponent,
    EducationComponent,
    ExperienceComponent,
    PersonalDetailsComponent,
    UploadFilesComponent,
    CardsViewComponent,
  ],
  imports: [CommonModule, JobSearchRoutingModule, SharedModule, NgbModule],
})
export class JobSearchModule {}
