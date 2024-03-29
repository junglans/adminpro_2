
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    { path : '', redirectTo: 'dashboard', pathMatch :'full'},
    { path: '**', component: NotfoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    // Rutas padre.
    RouterModule.forRoot( routes ),
    // Rutas hijas
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
