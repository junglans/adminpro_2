import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { AppRoutingModule } from './app-routing.module';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule
  ],
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,

    NotfoundComponent

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
