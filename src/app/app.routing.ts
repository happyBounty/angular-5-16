import { Routes } from '@angular/router';

import { AdminPanelLayoutComponent } from './layouts/adminPanel/AdminPanelLayout.component';
import { FrontendPanelLayoutComponent } from './layouts/frontendPanel/FrontendPanel.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
//   {
//   path: '',
//   redirectTo: 'home',
//   pathMatch: 'full',
// }, 
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, 
{
  path: '',
  component: FrontendPanelLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }]
}, 
{
  path: 'admin',
  component: AdminPanelLayoutComponent,
  children: [{
    path: '',
    loadChildren: () => import('./adminPages/admin.module').then(m => m.AdminModule)
  }]
},
{
  path: 'session',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
  }]
}
];
