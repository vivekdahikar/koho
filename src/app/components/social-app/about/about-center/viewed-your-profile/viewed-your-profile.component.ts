import { Component } from '@angular/core';
import * as viewed from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-viewed-your-profile',
  templateUrl: './viewed-your-profile.component.html',
  styleUrls: ['./viewed-your-profile.component.scss'],
})
export class ViewedYourProfileComponent {
  // data
  public viewedProfile = viewed.viewedProfile;
}
