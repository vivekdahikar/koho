import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-conten',
  templateUrl: './personal-conten.component.html',
  styleUrls: ['./personal-conten.component.scss'],
})
export class PersonalContenComponent {
  public days = ['01', '02', '03', '04'];
  public months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
