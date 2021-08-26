import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
{
  path: 'dashboard',
  loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
   
},
{
  path: 'settings',
  loadChildren: () => import('./modules/filter/filter.module').then(m => m.FilterModule),
   
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
