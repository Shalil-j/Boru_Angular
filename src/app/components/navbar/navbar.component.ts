import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() changeAddressTrigger: number = 0;
  showAddress:any;geoAddressLocation:any;


  constructor() { }
  ngOnInit(): void {
    this.showAddress = localStorage.getItem("geoAddress")?.substring(0, 30)+"..."
    this.geoAddressLocation = localStorage.getItem("geoAddressLocation")
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['changeAddressTrigger']) {
      this.showAddress = localStorage.getItem("geoAddress")
    }
    

  }


}
