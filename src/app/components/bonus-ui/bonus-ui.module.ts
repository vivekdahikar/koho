import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusUiRoutingModule } from './bonus-ui-routing.module';
import { SweetAlert2Component } from './sweet-alert2/sweet-alert2.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { BreadcrumbUiComponent } from './breadcrumb-ui/breadcrumb-ui.component';
import { DraggableCardComponent } from './draggable-card/draggable-card.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RangSliderComponent } from './rang-slider/rang-slider.component';
import { RatingComponent } from './rating/rating.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { StepsComponent } from './steps/steps.component';
import { StickyComponent } from './sticky/sticky.component';
import { Timeline1Component } from './timeline1/timeline1.component';
import { TourComponent } from './tour/tour.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { UsersModule } from '../users/users.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TreeModule } from '@circlon/angular-tree-component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DefaultPearlsStepsComponent } from './steps/default-pearls-steps/default-pearls-steps.component';
import { DefaultStepComponent } from './steps/default-step/default-step.component';
import { PearlsStepIconComponent } from './steps/pearls-step-icon/pearls-step-icon.component';
import { PearlsStepSizingComponent } from './steps/pearls-step-sizing/pearls-step-sizing.component';
import { PearlsStepStatesComponent } from './steps/pearls-step-states/pearls-step-states.component';
import { StepIconComponent } from './steps/step-icon/step-icon.component';
import { StepSizingComponent } from './steps/step-sizing/step-sizing.component';
import { StepStatesComponent } from './steps/step-states/step-states.component';
import { VerticalStepComponent } from './steps/vertical-step/vertical-step.component';
import { AlwaysVisibleScrollComponent } from './scrollable/always-visible-scroll/always-visible-scroll.component';
import { HorizontalScrollComponent } from './scrollable/horizontal-scroll/horizontal-scroll.component';
import { VerticalScrollComponent } from './scrollable/vertical-scroll/vertical-scroll.component';
import { PaginationActiveDisabledComponent } from './pagination/pagination-active-disabled/pagination-active-disabled.component';
import { PaginationAlignmentComponent } from './pagination/pagination-alignment/pagination-alignment.component';
import { PaginationColorComponent } from './pagination/pagination-color/pagination-color.component';
import { PaginationIconsComponent } from './pagination/pagination-icons/pagination-icons.component';
import { PaginationSizingComponent } from './pagination/pagination-sizing/pagination-sizing.component';
import { AnimateOwlComponent } from './owl-carousel/animate-owl/animate-owl.component';
import { AutoHeightOwlComponent } from './owl-carousel/auto-height-owl/auto-height-owl.component';
import { AutoPlayOwlComponent } from './owl-carousel/auto-play-owl/auto-play-owl.component';
import { AutoWidthOwlComponent } from './owl-carousel/auto-width-owl/auto-width-owl.component';
import { BasicOwlComponent } from './owl-carousel/basic-owl/basic-owl.component';
import { CenterOwlComponent } from './owl-carousel/center-owl/center-owl.component';
import { EventsOwlComponent } from './owl-carousel/events-owl/events-owl.component';
import { LazyLoadOwlComponent } from './owl-carousel/lazy-load-owl/lazy-load-owl.component';
import { MergeOwlComponent } from './owl-carousel/merge-owl/merge-owl.component';
import { MouseWheelOwlComponent } from './owl-carousel/mouse-wheel-owl/mouse-wheel-owl.component';
import { NavigationsOwlComponent } from './owl-carousel/navigations-owl/navigations-owl.component';
import { ResponsiveOwlComponent } from './owl-carousel/responsive-owl/responsive-owl.component';
import { RightToLeftOwlComponent } from './owl-carousel/right-to-left-owl/right-to-left-owl.component';
import { StagePaddingOwlComponent } from './owl-carousel/stage-padding-owl/stage-padding-owl.component';
import { BlogCardsComponent } from './basic-card/blog-cards/blog-cards.component';
import { CardWithBorderComponent } from './basic-card/card-with-border/card-with-border.component';
import { CardWithTabComponent } from './basic-card/card-with-tab/card-with-tab.component';
import { HorizontalCardComponent } from './basic-card/horizontal-card/horizontal-card.component';
import { ProfileCardsComponent } from './basic-card/profile-cards/profile-cards.component';
import { CommonProfileCardComponent } from './basic-card/profile-cards/common-profile-card/common-profile-card.component';
import { FaqModule } from '../faq/faq.module';
// import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    SweetAlert2Component,
    BasicCardComponent,
    BreadcrumbUiComponent,
    DraggableCardComponent,
    DropzoneComponent,
    ImageCropperComponent,
    OwlCarouselComponent,
    PaginationComponent,
    RangSliderComponent,
    RatingComponent,
    RibbonsComponent,
    ScrollableComponent,
    StepsComponent,
    StickyComponent,
    Timeline1Component,
    TourComponent,
    TreeViewComponent,
    DefaultPearlsStepsComponent,
    DefaultStepComponent,
    PearlsStepIconComponent,
    PearlsStepSizingComponent,
    PearlsStepStatesComponent,
    StepIconComponent,
    StepSizingComponent,
    StepStatesComponent,
    VerticalStepComponent,
    AlwaysVisibleScrollComponent,
    HorizontalScrollComponent,
    VerticalScrollComponent,
    PaginationActiveDisabledComponent,
    PaginationAlignmentComponent,
    PaginationColorComponent,
    PaginationIconsComponent,
    PaginationSizingComponent,
    AnimateOwlComponent,
    AutoHeightOwlComponent,
    AutoPlayOwlComponent,
    AutoWidthOwlComponent,
    BasicOwlComponent,
    CenterOwlComponent,
    EventsOwlComponent,
    LazyLoadOwlComponent,
    MergeOwlComponent,
    MouseWheelOwlComponent,
    NavigationsOwlComponent,
    ResponsiveOwlComponent,
    RightToLeftOwlComponent,
    StagePaddingOwlComponent,
    BlogCardsComponent,
    CardWithBorderComponent,
    CardWithTabComponent,
    HorizontalCardComponent,
    ProfileCardsComponent,
    CommonProfileCardComponent,
  ],
  imports: [
    CommonModule,
    BonusUiRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    UsersModule,
    CarouselModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    NgxSliderModule,
    TreeModule,
    ImageCropperModule,
    FontAwesomeModule,
    // DragulaModule.forRoot(),
    FaqModule,
  ],
  exports: [SweetAlert2Component],
})
export class BonusUiModule {}
