import { NgModule } from '@angular/core';
import {MainAppRoutingModule} from './main-app-routing.module';
import {MainAppComponent} from './main-app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {
  MatButtonModule, MatDialogModule, MatDividerModule, MatGridListModule,
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
import { VideosComponent } from './components/videos/videos.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../interceptors/auth.interceptor';
import { VideosListModalComponent } from './components/videos-list-modal/videos-list-modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MainAppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    VideosComponent,
    FileUploaderComponent,
    VideosListModalComponent
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
    CommonModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [
    FileUploaderComponent,
    VideosListModalComponent
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class MainAppModule { }


