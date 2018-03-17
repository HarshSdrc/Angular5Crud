import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employee : Employee[]=[];
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() : void {
    this.employeeService.getEmployeeList().subscribe(employees => this.employee = employees);
   }
}
