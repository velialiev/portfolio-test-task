import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './pages/services/services.component';
import { FeatureComponent } from './components/feature/feature.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProjectsComponent } from './pages/projects/projects.component';
import {ProjectsGuard} from './shared/guards/projects/projects.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { ConfirmationPopupComponent } from './parts/confirmation-popup/confirmation-popup.component';
import { WebProjectsComponent } from './pages/web-projects/web-projects.component';
import {AuthInterceptor} from './shared/interceptors/auth/auth.interceptor';
import { PaginationComponent } from './parts/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServicesComponent,
    FeatureComponent,
    ProjectsComponent,
    ConfirmationPopupComponent,
    WebProjectsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    ProjectsGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationPopupComponent]
})
export class AppModule { }
