import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '',  component: PagesComponent, children: [

      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphic1', component: Graphic1Component },
      { path: '',  redirectTo: 'dashboard', pathMatch: 'full' }

  ] },
  { path: '**', component: NotfoundComponent }

];
@NgModule({
  declarations: [],
  imports: [
    // Rutas padre.
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
