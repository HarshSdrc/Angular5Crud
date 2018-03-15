import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employees : Employee[];
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees() : void {
   this.employeeService.getEmployeeList().subscribe(employees => this.employees = employees);
  }

  selectedEmployeee: Employee;

onSelectEmployee(selectEmployeee: Employee): void {
  this.selectedEmployeee = selectEmployeee;
}

}
