import { Component } from '@angular/core';
import * as data from '../../../../shared/data/bonus-ui/bonus-ui';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss'],
})
export class ProfileCardsComponent {
  public cardData1 = data.cardData1;
  public cardData2 = data.cardData2;
}
