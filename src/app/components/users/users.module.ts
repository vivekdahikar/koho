import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersCardsComponent } from './users-cards/users-cards.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileComponent } from './users-profile/user-profile/user-profile.component';
import { LeftContentComponent } from './users-profile/left-content/left-content.component';
import { RightContentComponent } from './users-profile/right-content/right-content.component';
import { DoubleComponent } from './users-profile/right-content/double/double.component';
import { SinglePostComponent } from './users-profile/right-content/single-post/single-post.component';
import { AboutMeComponent } from './users-profile/left-content/about-me/about-me.component';
import { FollowersComponent } from './users-profile/left-content/followers/followers.component';
import { FollowingComponent } from './users-profile/left-content/following/following.component';
import { FriendsComponent } from './users-profile/left-content/friends/friends.component';
import { LatestPhotosComponent } from './users-profile/left-content/latest-photos/latest-photos.component';

@NgModule({
  declarations: [
    UsersCardsComponent,
    UsersEditComponent,
    UsersProfileComponent,
    UserProfileComponent,
    LeftContentComponent,
    RightContentComponent,
    DoubleComponent,
    SinglePostComponent,
    AboutMeComponent,
    FollowersComponent,
    FollowingComponent,
    FriendsComponent,
    LatestPhotosComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
