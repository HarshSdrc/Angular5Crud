import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {EMPLOYEES} from './mock-employee'
import{CallSucessServiceService} from './call-sucess-service.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeServiceService {

  constructor(private http: HttpClient,private classSucess:CallSucessServiceService) { }

  private employeesUrl = 'api/employees'; 

  getEmployeeList () :Observable<Employee[]>
  {
    this.classSucess.addMessage("Call Done");
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap(heroes => this.log(`fetched Employee`)),
      catchError(this.handleError('getEmployee', []))
  );
  }


  getEmployee(id: number): Observable<Employee> {
    this.classSucess.addMessage(`Employee Service: fetched employee id=${id}`);
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`fetched Employee id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    )
    // return of(EMPLOYEES.find(employee => employee.id === id));
  }



  updateEmployee (employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, httpOptions);
  }

  addEmployee (Employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, Employee, httpOptions);
  }

  deleteEmployee (hero: Employee | number): Observable<Employee> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.employeesUrl}/${id}`;
  
    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted heEmployeero id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Employee[]>(`api/employee/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.classSucess.addMessage('EmployeeService: ' + message);
  }
}
