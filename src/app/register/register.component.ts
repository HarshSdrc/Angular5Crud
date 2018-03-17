import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeServiceService} from '../employee-service.service';
import {CallSucessServiceService} from '../call-sucess-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employees : Employee[];
  constructor(private employeeService:EmployeeServiceService,private callSucessServiceService:CallSucessServiceService) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees() : void {
   this.employeeService.getEmployeeList().subscribe(employees => this.employees = employees);
  }

//   selectedEmployeee: Employee;

// onSelectEmployee(selectEmployeee: Employee): void {
//   this.callSucessServiceService.addMessage(selectEmployeee.name);
//   this.selectedEmployeee = selectEmployeee;
// }

}
