import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
  },

  {
    path: 'report',
    loadComponent: () => import('./report/report.component').then(m => m.ReportComponent),
  },

];
