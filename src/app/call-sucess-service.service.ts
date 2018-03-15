import { Injectable } from '@angular/core';

@Injectable()
export class CallSucessServiceService {

  message : string [] =[];
  constructor() { }

  addMessage(message :string)
  {
    this.message.push(message)
  }

  clear()
  {
    this.message=[];
  }
}
