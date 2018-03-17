import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataServiceService implements InMemoryDbService
{

  constructor() { }

  createDb(){

    const employees =[
      {
        id : 1,
        name : 'Harsh',
        code : '1091'
      },
      {
        id : 2,
        name : 'Rohit',
        code : '1092'
      }
      ,
      {
        id : 3,
        name : 'Rishi',
        code : '1093'
      },
      {
        id : 4,
        name : 'Suman',
        code : '1095'
      },
      {
        id : 5,
        name : 'Mona',
        code : '1097'
      },
      {
        id : 6 ,
        name : 'Naseem',
        code : '10912'
      }];
    return {employees};
  }

}
