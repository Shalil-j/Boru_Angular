import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subs-bill-summery',
  templateUrl: './subs-bill-summery.component.html',
  styleUrls: ['./subs-bill-summery.component.css']
})
export class SubsBillSummeryComponent implements OnInit {

bill=[
  {product_name:'Fortune Sunlite Refined Sunflower Oil',product_qty:'5L',price:'950',qty:'1',total:'950'},
  {product_name:'Tata Iodised Salt',product_qty:'1kg',price:'25',qty:'2',total:'50'},
  {product_name:'ITC Master Chef Cheesy Corn Triangles',product_qty:'250g',price:'120',qty:'3',total:'360'},
  {product_name:'Maggi 2-Minute Masala Instant Noodles',product_qty:'600g',price:'95',qty:'2',total:'190'},
  {product_name:'Sunfeast Dark Fantasy Original Choco Filled Biscuits',product_qty:'300g',price:'115',qty:'2',total:'230'},
  {product_name:'Cadbury Oreo Choco Creme Biscuits',product_qty:'400g',price:'70',qty:'3',total:'210'},
]

  constructor() { }

  ngOnInit(): void {
  }

}
