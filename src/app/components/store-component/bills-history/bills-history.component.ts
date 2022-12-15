import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills-history',
  templateUrl: './bills-history.component.html',
  styleUrls: ['./bills-history.component.css']
})
export class BillsHistoryComponent implements OnInit {

 bill=[
  {month:'august',year:'2021',date:'03/05/21',qty:'2',amount:'1200',status:'current bill'},
  {month:'august',year:'2021',date:'15/06/21',qty:'5',amount:'1650',status:'paid'},
  {month:'september',year:'2022',date:'26/05/22',qty:'6',amount:'3600',status:'paid'},
  {month:'june',year:'2022',date:'12/03/22',qty:'8',amount:'2650',status:'unpaid'},
  {month:'may',year:'2020',date:'06/04/20',qty:'12',amount:'1250',status:'paid'},
  {month:'april',year:'2022',date:'20/06/22',qty:'4',amount:'750',status:'unpaid'},
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
