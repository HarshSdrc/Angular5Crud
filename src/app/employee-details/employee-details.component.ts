import { Component, OnInit,Input } from '@angular/core';
import {Employee} from '../employee'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
    private employeeServiceService: EmployeeServiceService,
    private location: Location) { }

  ngOnInit() {
    this.getEmployee();
  }

  @Input() selectedEmployeee: Employee;

  getEmployee():void
  {
    const id=+this.route.snapshot.paramMap.get('id');

    this.employeeServiceService.getEmployee(id)
    .subscribe(selectedEmployeee => this.selectedEmployeee = selectedEmployeee);
  }

  goBack(): void {
    this.location.back();
  }

  updateEmployee(): void {
    this.employeeServiceService.updateEmployee(this.selectedEmployeee)
      .subscribe(() => this.goBack());
  }

  deleteEmployee():void
  {
    this.employeeServiceService.deleteEmployee(this.selectedEmployeee).subscribe(employee=>this.goBack());
  }
}
