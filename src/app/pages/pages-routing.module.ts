import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const routes = [
  { 
    path: 'dashboard',  component: PagesComponent, children: [

        { path: '', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graphic1', component: Graphic1Component },
        { path: '',  redirectTo: 'dashboard', pathMatch: 'full' }

    ] 
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
