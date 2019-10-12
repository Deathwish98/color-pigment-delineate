import { NgModule } from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  // { path: 'organization', children: [
  //     { path: 'start', loadChildren: './pages/organisation/organisation-start/organisation-start.module#OrganisationStartPageModule' },
  //     { path: 'setup', loadChildren: './pages/organisation/set-up-organisation/set-up-organisation.module#SetUpOrganisationPageModule' },
  //     { path: 'invite-teammates', loadChildren: './pages/organisation/invite-teammates/invite-teammates.module#InviteTeammatesPageModule'},
  //     { path: 'start-free-trial', loadChildren: './pages/organisation/start-free-trial/start-free-trial.module#StartFreeTrialPageModule' }
  //   ]},
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
  { path: '', loadChildren: './modules/main-app/main-app.module#MainAppModule', canLoad: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
