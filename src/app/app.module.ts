import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {EmployeeServiceService} from './employee-service.service';
import { CallSuccessComponent } from './call-success/call-success.component';
import { CallSucessServiceService } from './call-sucess-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmployeeDetailsComponent,
    CallSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeServiceService, CallSucessServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
