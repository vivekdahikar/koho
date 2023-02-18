import { Component } from '@angular/core';
import * as faq from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-faq-top-part',
  templateUrl: './faq-top-part.component.html',
  styleUrls: ['./faq-top-part.component.scss'],
})
export class FaqTopPartComponent {
  public FaqTopPart = faq.FaqTopPart;
}
