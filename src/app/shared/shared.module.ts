import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LanguageComponent } from './components/header/language/language.component';
import { ModeComponent } from './components/header/mode/mode.component';
import { BookmarkComponent } from './components/header/bookmark/bookmark.component';
import { NotificationComponent } from './components/header/notification/notification.component';
import { MessageBoxComponent } from './components/header/message-box/message-box.component';
import { MaximiseComponent } from './components/header/maximise/maximise.component';
import { SearchComponent } from './components/header/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LanguageComponent,
    ModeComponent,
    BookmarkComponent,
    NotificationComponent,
    MessageBoxComponent,
    MaximiseComponent,
    SearchComponent,
    FooterComponent,
    SidebarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
