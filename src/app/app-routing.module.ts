import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AddRouteComponent } from './add-route/add-route.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addroute', component: AddRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
