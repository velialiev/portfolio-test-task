import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ServicesComponent} from './pages/services/services.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {ProjectsGuard} from './shared/guards/projects/projects.guard';
import {WebProjectsComponent} from './pages/web-projects/web-projects.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'projects', component: ProjectsComponent, canActivate: [ProjectsGuard]},
  {path: 'web-projects', component: WebProjectsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
