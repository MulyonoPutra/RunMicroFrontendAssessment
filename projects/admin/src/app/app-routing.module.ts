import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../@core/layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadComponent: () => import('../@modules/users/user-collections/user-collections.component')
          .then(modules => modules.UserCollectionsComponent)
      },
      {
        path: 'todo',
        loadComponent: () => import('../@modules/todo/todo-collections/todo-collections.component')
          .then(modules => modules.TodoCollectionsComponent)
      },
      {
        path: 'todo-form/:id',
        loadComponent: () => import('../@modules/todo/todo-form/todo-form.component')
          .then(modules => modules.TodoFormComponent)
      },
      {
        path: 'todo-form',
        loadComponent: () => import('../@modules/todo/todo-form/todo-form.component')
          .then(modules => modules.TodoFormComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
