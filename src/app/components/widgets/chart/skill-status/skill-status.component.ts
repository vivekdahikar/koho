import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/widget/widget';

@Component({
  selector: 'app-skill-status',
  templateUrl: './skill-status.component.html',
  styleUrls: ['./skill-status.component.scss'],
})
export class SkillStatusComponent {
  public widget6 = chartData.widget6;
}
