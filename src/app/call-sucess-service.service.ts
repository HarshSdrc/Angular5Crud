import { Injectable } from '@angular/core';

@Injectable()
export class CallSucessServiceService {

  message : String [] =[];
  constructor() { }

  addMessage(message :String)
  {
    this.message.push(message)
  }

  clear()
  {
    this.message=[];
  }
}
