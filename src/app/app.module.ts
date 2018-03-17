import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {EmployeeServiceService} from './employee-service.service';
import { CallSuccessComponent } from './call-success/call-success.component';
import { CallSucessServiceService } from './call-sucess-service.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataServiceService } from './in-memory-data-service.service';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmployeeDetailsComponent,
    CallSuccessComponent,
    DashboardComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataServiceService, { dataEncapsulation: false }
    )
  ],
  providers: [EmployeeServiceService, CallSucessServiceService, InMemoryDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
