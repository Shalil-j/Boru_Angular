import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-orders-component',
  templateUrl: './pre-orders-component.component.html',
  styleUrls: ['./pre-orders-component.component.css']
})
export class PreOrdersComponentComponent implements OnInit {

  bills_history=[
    {shop_name: 'Shubham Store',shop_add:'Maharashtra, Mumbai, lower parel' ,quantity:'5',amount:'1562',},
    {shop_name: 'Mother Dairy',shop_add:'Maharashtra, Mumbai, kurla' ,quantity:'10',amount:'506',},
    {shop_name: 'Kishore Kirana',shop_add:'Maharashtra, Mumbai, dadar' ,quantity:'8',amount:'2000',},
    {shop_name: 'Anna coconuts',shop_add:'Maharashtra, Mumbai, Matunga' ,quantity:'3',amount:'150',},
    {shop_name: 'bislery water',shop_add:'Maharashtra, Mumbai, Sion' ,quantity:'20',amount:'760',}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
