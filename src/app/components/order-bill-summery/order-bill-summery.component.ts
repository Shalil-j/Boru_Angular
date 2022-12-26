import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-bill-summery',
  templateUrl: './order-bill-summery.component.html',
  styleUrls: ['./order-bill-summery.component.css']
})
export class OrderBillSummeryComponent implements OnInit {

  bill_summary=[
    {product_name:'Amul Moti Homogenised Toned Milk',qty:'450ml',amount:'30',item:'3',total_amount:'90'},
    {product_name:'Tata Iodised Salt',qty:'1kg',amount:'25',item:'2',total_amount:'50'},
    {product_name:'Kalpasree Coconut Oil',qty:'1L',amount:'169',item:'5',total_amount:'780'},
    {product_name:'Aashirvaad Superior MP Whole Wheat Atta',qty:'10kg',amount:'450',item:'1',total_amount:'450'},
    {product_name:'Tur / Arhar Dal',qty:'2kg',amount:'250',item:'3',total_amount:'750'},
    {product_name:'Good Life Raw Peanuts',qty:'500g',amount:'80',item:'4',total_amount:'280'},
    {product_name:'Good Life Moong Dal',qty:'500g',amount:'75',item:'2',total_amount:'150'},
  ]
  order_status=[{
    ordertoshop:true,
    orderaccepted:false,
    orderdelivered:null,
  }
  ]
  ordertoshop=[
    {status:'done',timing:'9:00AM',}
  ];
  orderaccepted=[{status:'canceled',timing:'10:50AM',}];
  orderdelivered=[{status:'no-response',timing:'10:45AM',}]


  constructor() { }

  ngOnInit(): void {
  }

}
