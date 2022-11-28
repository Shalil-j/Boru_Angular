import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-subs-bills-component',
  templateUrl: './subs-bills-component.component.html',
  styleUrls: ['./subs-bills-component.component.css']
})
export class SubsBillsComponentComponent implements OnInit {

  bills=[
    {shop_name: 'Shubham Store',month_of_purches:'june 2021',date_of_purches:'10/06/21',quantity:'5',amount:'1562',status:'new'},
    {shop_name: 'Mother Dairy',month_of_purches:'august 2020',date_of_purches:'12/09/20',quantity:'10',amount:'506',status:'paid'},
    {shop_name: 'Kishore Kirana',month_of_purches:'april 2022',date_of_purches:'05/04/22',quantity:'8',amount:'2000',status:'un-paid'},
    {shop_name: 'Anna coconuts',month_of_purches:'may 2022',date_of_purches:'26/05/22',quantity:'3',amount:'150',status:'un-paid'},
    {shop_name: 'bislery water',month_of_purches:'september 2019',date_of_purches:'23/09/19',quantity:'20',amount:'760',status:'paid'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
