import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent }      from './register/register.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {EmployeeDetailsComponent} from   './employee-details/employee-details.component'


const routes:Routes=[
  {path:'employees',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:EmployeeDetailsComponent}
];
@NgModule({
  
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

 }
