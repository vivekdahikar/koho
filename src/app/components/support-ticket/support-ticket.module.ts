import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { SupportTicketRoutingModule } from './support-ticket-routing.module';
import { SupportTicketComponent } from './support-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { CountToModule } from 'angular-count-to';
import { FormsModule } from '@angular/forms';
import { SupportTicketService } from '../../shared/service/support-ticket/support-ticket.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [SupportTicketComponent, TicketComponent],
  imports: [
    CommonModule,
    SupportTicketRoutingModule,
    CountToModule,
    FormsModule,
    SharedModule,
    NgbModule,
  ],
  providers: [SupportTicketService],
})
export class SupportTicketModule {}
