import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComposeComponent } from './compose/compose.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
var routingAnimation = localStorage.getItem('animate');

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mail-inbox',
        component: MailInboxComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'read-email',
        component: ReadMailComponent,
        data: { animation: [routingAnimation] },
      },
      {
        path: 'compose',
        component: ComposeComponent,
        data: { animation: [routingAnimation] },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class EmailRoutingModule {}
