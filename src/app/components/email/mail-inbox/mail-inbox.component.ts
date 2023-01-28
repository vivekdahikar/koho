import { Component } from '@angular/core';
import * as email from '../../../shared/data/email/email';

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './mail-inbox.component.html',
  styleUrls: ['./mail-inbox.component.scss'],
})
export class MailInboxComponent {
  show = false;

  // data
  public emailData = email.emailData;

  constructor() {}

  // manu show
  openMenu() {
    this.show = !this.show;
  }

  ngOnInit(): void {}
}
