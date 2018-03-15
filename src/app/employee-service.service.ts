import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {EMPLOYEES} from './mock-employee'

@Injectable()
export class EmployeeServiceService {

  constructor() { }


  getEmployeeList () : Employee[]
  {
    return EMPLOYEES;
  }

}
