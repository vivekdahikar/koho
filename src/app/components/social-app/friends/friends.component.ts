import { Component } from '@angular/core';
import * as userData from '../../../shared/data/user/user';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent {
  // data
  public userCards = userData.userCards;
}
