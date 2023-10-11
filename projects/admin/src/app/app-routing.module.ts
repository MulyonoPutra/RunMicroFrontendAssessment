import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { LayoutComponent } from '../@core/layout/layout.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
