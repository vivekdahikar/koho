import { Component } from '@angular/core';
import * as data from '../../../../shared/data/owl';

@Component({
  selector: 'app-events-owl',
  templateUrl: './events-owl.component.html',
  styleUrls: ['./events-owl.component.scss'],
})
export class EventsOwlComponent {
  public owlcarousel7ptions = data?.owlcarousel7ptions;
  public owlcarousel1 = data?.owlcarousel1;
}
