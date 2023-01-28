import { Component, Injectable } from '@angular/core';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calender',

  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent {
  model: NgbDateStruct | any;
  date: { year: number; month: number } | any;

  constructor(private calendar: NgbCalendar) {}
}
