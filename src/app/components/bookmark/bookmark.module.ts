import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkProfileComponent } from './bookmark-profile/bookmark-profile.component';
import { CreateBookmarksComponent } from './create-bookmarks/create-bookmarks.component';
import { EditBookmarkComponent } from './model/edit-bookmark/edit-bookmark.component';
import { CreateTagComponent } from './model/create-tag/create-tag.component';
import { AddBookmarkComponent } from './model/add-bookmark/add-bookmark.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookmarkComponent } from './bookmark.component';

@NgModule({
  declarations: [
    BookmarkComponent,
    EditBookmarkComponent,
    CreateTagComponent,
    AddBookmarkComponent,
    BookmarkProfileComponent,
    CreateBookmarksComponent,
  ],
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AddBookmarkComponent],
})
export class BookmarkModule {}
