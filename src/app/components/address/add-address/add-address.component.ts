import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {


  steponeform=false;
  steptowform=true;

  stepOne(){
    this.steponeform=!this.steponeform;
    this.steptowform=!this.steptowform;
  }
  stepTwo(){
    this.steponeform=!this.steponeform;
    this.steptowform=!this.steptowform;
    console.log('working...');
  }



  constructor() { }

  ngOnInit(): void {
  }

}
