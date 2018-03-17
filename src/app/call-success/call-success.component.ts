import { Component, OnInit } from '@angular/core';
import{CallSucessServiceService} from '../call-sucess-service.service';

@Component({
  selector: 'app-call-success',
  templateUrl: './call-success.component.html',
  styleUrls: ['./call-success.component.css']
})
export class CallSuccessComponent implements OnInit {

  constructor(public callSuccess:CallSucessServiceService) { }

  ngOnInit() {
   
  }


}
