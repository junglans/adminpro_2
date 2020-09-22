import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent
  ],
  
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
