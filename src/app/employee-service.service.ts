import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {EMPLOYEES} from './mock-employee'
import{CallSucessServiceService} from './call-sucess-service.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmployeeServiceService {

  constructor(private classSucess:CallSucessServiceService) { }


  getEmployeeList () :Observable<Employee[]>
  {
    this.classSucess.addMessage("Call Done");
    return of(EMPLOYEES);
  }


  getEmployee(id: number): Observable<Employee> {
    // Todo: send the message _after_ fetching the hero
    this.classSucess.addMessage(`Employee Service: fetched employee id=${id}`);
    return of(EMPLOYEES.find(employee => employee.id === id));
  }
}
