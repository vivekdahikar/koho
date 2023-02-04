import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../../components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'widgest',
    loadChildren: () =>
      import('../../../components/widgets/widgets.module').then(
        (m) => m.WidgetsModule
      ),
  },
  {
    path: 'page-layout',
    loadChildren: () =>
      import('../../../components/page-layout/page-layout.module').then(
        (m) => m.PageLayoutModule
      ),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('../../../components/project/project.module').then(
        (m) => m.ProjectModule
      ),
  },
  {
    path: 'file-manager',
    loadChildren: () =>
      import('../../../components/file-manager/file-manager.module').then(
        (m) => m.FileManagerModule
      ),
  },
  {
    path: 'kanban-board',
    loadChildren: () =>
      import('../../../components/kanban-board/kanban-board.module').then(
        (m) => m.KanbanBoardModule
      ),
  },
  {
    path: 'e-commerce',
    loadChildren: () =>
      import('../../../components/e-commerce/e-commerce.module').then(
        (m) => m.ECommerceModule
      ),
  },
  {
    path: 'email',
    loadChildren: () =>
      import('../../../components/email/email.module').then(
        (m) => m.EmailModule
      ),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('../../../components/chat/chat.module').then((m) => m.ChatModule),
  },
];
