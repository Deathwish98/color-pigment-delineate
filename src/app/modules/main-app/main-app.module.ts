import { NgModule } from '@angular/core';
import {MainAppRoutingModule} from './main-app-routing.module';
import {MainAppComponent} from './main-app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {
  MatButtonModule, MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    MainAppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MainAppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    CommonModule
  ]
})
export class MainAppModule { }


