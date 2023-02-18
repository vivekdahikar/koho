import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsFilterComponent } from './contacts-filter/contacts-filter.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { PersonalComponent } from './personal/personal.component';
import { PrintModelComponent } from './print-model/print-model.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GeneralComponent } from './personal/edit-form/general/general.component';
import { PersonalContenComponent } from './personal/edit-form/personal-conten/personal-conten.component';
import { AddressContentComponent } from './personal/edit-form/address-content/address-content.component';
import { ContactsComponent } from './contacts.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsFilterComponent,
    NewContactComponent,
    PersonalComponent,
    PrintModelComponent,
    GeneralComponent,
    PersonalContenComponent,
    AddressContentComponent,
  ],
  imports: [CommonModule, ContactsRoutingModule, SharedModule],
})
export class ContactsModule {}
