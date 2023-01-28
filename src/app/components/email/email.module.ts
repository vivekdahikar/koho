import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { ComposeComponent } from './compose/compose.component';
import { EmailFilterComponent } from './email-filter/email-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    MailInboxComponent,
    ReadMailComponent,
    ComposeComponent,
    EmailFilterComponent,
  ],
  imports: [CommonModule,CKEditorModule, EmailRoutingModule, SharedModule,NgxDropzoneModule],
})
export class EmailModule {}
