import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // {
    // path: 'dashboard',
    // component: DashboardComponent,
    // },
    {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  },  {
    path: '',
    redirectTo: 'forms/inputs',
    pathMatch: 'full',
  }, {
    path: '**',
    loadChildren: './tables/tables.module#TablesModule',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
