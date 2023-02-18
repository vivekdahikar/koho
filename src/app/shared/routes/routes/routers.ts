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
    path: 'calender',
    loadChildren: () =>
      import('../../../components/calender/calender.module').then(
        (m) => m.CalenderModule
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
  {
    path: 'users',
    loadChildren: () =>
      import('../../../components/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
  {
    path: 'bookmark',
    loadChildren: () =>
      import('../../../components/bookmark/bookmark.module').then(
        (m) => m.BookmarkModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('../../../components/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  {
    path: 'task',
    loadChildren: () =>
      import('../../../components/task/task.module').then((m) => m.TaskModule),
  },
  {
    path: 'social-app',
    loadChildren: () =>
      import('../../../components/social-app/social-app.module').then(
        (m) => m.SocialAppModule
      ),
  },
  {
    path: 'to-do',
    loadChildren: () =>
      import('../../../components/to-do/to-do.module').then(
        (m) => m.ToDoModule
      ),
  },
  {
    path: 'search-website',
    loadChildren: () =>
      import('../../../components/search-website/search-website.module').then(
        (m) => m.SearchWebsiteModule
      ),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('../../../components/forms/form.module').then((m) => m.FormModule),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('../../../components/tables/tables.module').then(
        (m) => m.TablesModule
      ),
  },
];
