import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  providers:[DataService]
})
export class EmpComponent implements OnInit {
  //we are creating 3 different arrays that holding employee info
infoReceived1: string[]= [];
infoReceived2: string[]= [];
infoReceived3: string[]= [];

//To call these arrays, we are Creating methods to receive info 
// through service
getInfoFromService1(){
 this.infoReceived1 = this.dservice.getInfo1();
}
getInfoFromService2(){
this.infoReceived2 = this.dservice.getInfo2();
}
getInfoFromService3(){
this.infoReceived3 = this.dservice.getInfo3();
}

//dataserve is a property of DataService provider
constructor(private dservice: DataService) { }

  ngOnInit(): void {
  }

}
