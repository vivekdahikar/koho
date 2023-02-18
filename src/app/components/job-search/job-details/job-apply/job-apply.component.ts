import { Component } from '@angular/core';
import * as jobs from '../../../../shared/data/job-search/job-search';
import { jobDetail } from '../../../../shared/data/job-search/job-search';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss'],
})
export class JobApplyComponent {
  qualifications = jobDetail.qualifications;
  description = jobDetail.description;
  agencyExperience = jobDetail.agencyExperience;
  perks = jobDetail.perks;
}
