import { Component, OnInit,Input } from '@angular/core';
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
  @Input() newEmployee : Employee;
  constructor(private employeeService:EmployeeServiceService,private callSucessServiceService:CallSucessServiceService) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees() : void {
   this.employeeService.getEmployeeList().subscribe(employees => this.employees = employees);
  }


  add(name: String, code : String): void {
    name = name.trim();
    code=code.trim();
    if (!name && !code) { return; }
    this.employeeService.addEmployee({ name,code } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }
}
