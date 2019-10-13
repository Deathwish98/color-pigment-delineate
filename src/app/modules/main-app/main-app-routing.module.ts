import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainAppComponent} from './main-app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {VideosComponent} from './components/videos/videos.component';


const routes: Routes = [
  {
    path: '', component: MainAppComponent, children: [
      {
        path: '', redirectTo: 'dashboard'
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'videos', component: VideosComponent
      }
      // {
      //   path: 'balance', loadChildren: './balance/balance.module#BalanceModule'
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
