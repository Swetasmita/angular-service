import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//Service has some records about employee
info1: string[]=[ "John Mathew", 'E101', 'jm@abc.net'];
info2: string[]=[ "Rob Wilson", 'E102', 'rb@abc.net'];
info3: string[]=[ "Rose Adams", 'E103', 'ra@abc.net'];

//Create get function to return these employee details
//define methods in service class
getInfo1(){
  return this.info1; //the method returns value of info1
}
getInfo2(){
  return this.info2; //returns value of info2
}
getInfo3(){
  return this.info3; //returns value of info3
}

  constructor() { }
}
