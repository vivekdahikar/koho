import { NgModule } from '@angular/core';
var routingAnimation = localStorage.getItem('animate');

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContentComponent } from './shared/layout/content/content.component';
import { FullComponent } from './shared/layout/full/full.component';
import { full } from './shared/routes/routes/full';
import { content } from './shared/routes/routes/routers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/default',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },

  {
    path: '',
    component: ContentComponent,
    children: content,
  },
  {
    path: '',
    component: FullComponent,

    children: full,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
