import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgebasesComponent } from './knowledgebases.component';
import { HelpBoardComponent } from './help-board/help-board.component';
import { KnowledgeCategoryComponent } from './knowledge-category/knowledge-category.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LearningModule } from '../learning/learning.module';
import { FaqModule } from '../faq/faq.module';
import { KnowledgebasesRoutingModule } from './knowledgebases-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { KnowledgeDetailComponent } from './knowledge-detail/knowledge-detail.component';
import { KnowledgebaseComponent } from './knowledgebase/knowledgebase.component';

@NgModule({
  declarations: [
    KnowledgebasesComponent,
    KnowledgeDetailComponent,
    HelpBoardComponent,
    KnowledgeCategoryComponent,
    KnowledgebaseComponent,
  ],
  imports: [
    CommonModule,
    KnowledgebasesRoutingModule,
    AngularSvgIconModule.forRoot(),
    SharedModule,
    FaqModule,
    LearningModule,
  ],
})
export class KnowledgebasesModule {}
