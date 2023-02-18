import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialAppRoutingModule } from './social-app-routing.module';
import { SocialAppComponent } from './social-app.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { PhotosComponent } from './photos/photos.component';
import { FriendsComponent } from './friends/friends.component';
import { AboutComponent } from './about/about.component';
import { TimeLineCenterComponent } from './time-line/time-line-center/time-line-center.component';
import { TimeLineLeftComponent } from './time-line/time-line-left/time-line-left.component';
import { TimeLineRightComponent } from './time-line/time-line-right/time-line-right.component';
import { AboutCenterComponent } from './about/about-center/about-center.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersModule } from '../users/users.module';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { LightboxModule } from '@ngx-gallery/lightbox';

import 'hammerjs';
import 'mousetrap';
import { ProfileIntroComponent } from './time-line/time-line-right/profile-intro/profile-intro.component';
import { ActivityFeedComponent } from './time-line/time-line-left/activity-feed/activity-feed.component';
import { MutualFriendComponent } from './time-line/time-line-left/mutual-friend/mutual-friend.component';
import { MyProfileComponent } from './time-line/time-line-left/my-profile/my-profile.component';
import { CommentOneComponent } from './time-line/time-line-center/comment-one/comment-one.component';
import { CommentTwoComponent } from './time-line/time-line-center/comment-two/comment-two.component';
import { ActivityLogComponent } from './about/about-center/activity-log/activity-log.component';
import { AddFriendsComponent } from './about/about-center/add-friends/add-friends.component';
import { EducationAndEmploymentComponent } from './about/about-center/education-and-employment/education-and-employment.component';
import { HobbiesComponent } from './about/about-center/hobbies/hobbies.component';
import { ViewedYourProfileComponent } from './about/about-center/viewed-your-profile/viewed-your-profile.component';
@NgModule({
  declarations: [
    SocialAppComponent,
    TimeLineComponent,
    PhotosComponent,
    FriendsComponent,
    AboutComponent,
    TimeLineCenterComponent,
    TimeLineLeftComponent,
    TimeLineRightComponent,
    AboutCenterComponent,
    ProfileIntroComponent,
    ActivityFeedComponent,
    MutualFriendComponent,
    MyProfileComponent,
    CommentOneComponent,
    CommentTwoComponent,
    ActivityLogComponent,
    AddFriendsComponent,
    EducationAndEmploymentComponent,
    HobbiesComponent,
    ViewedYourProfileComponent,
  ],
  imports: [
    CommonModule,
    SocialAppRoutingModule,
    SharedModule,
    NgbModule,
    UsersModule,
    GalleryModule,
    LightboxModule,
  ],
})
export class SocialAppModule {}
