import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit {
  showaddress=true;
  selectaddress=false;
  showadd(){
    this.selectaddress=!this.selectaddress;
    this.showaddress=!this.showaddress;
  }
  selectadd(){
    this.selectaddress=!this.selectaddress;
    this.showaddress=!this.showaddress;
  }

  quantity = 2;
  plus(){
    this.quantity = this.quantity + 1;
  }
  minus(){
    if (this.quantity !=0){
      this.quantity = this.quantity - 1;
    }
  }

  address=[
    {label:'home 1', locations_type:'home',place_address:'Room no.9',full_address:'	Dr E Borges Rd, Parel, 	Mumbai'},
    {label:'office chembur', locations_type:'office',place_address:'45-A',full_address:'	Canery Hill Rd, Dipugarha, 	Jharkhand'},
    {label:'home 2', locations_type:'home',place_address:'78-A',full_address:'Noor Mahal, Turner Road, Bandra (W), 7th Rd, Bandra West'},
    {label:'indra market', locations_type:'other',place_address:'Shop No. 17',full_address:' Nishigandha Apartment, Khetwani Nagar, Untwadi Road, Nasik Nagar, City Centre Mall & Bafna Jewellers, Opposite Khetwani Lawns'},
    {label:'home 3', locations_type:'home',place_address:'262',full_address:'Bund Garden Rd, Bund Garden, Sangamvadi'},
    {label:'home 4', locations_type:'home',place_address:'Flate no.2',full_address:'Film City Rd, IGIDR, Nagri Niwara Cooperative Housing Society, Goregaon East'},
  ]

  product_list=[
    {product_name:'Amul milk',product_qty:'500ml',price:'25',qty:'3'},
    {product_name:'amul curd',product_qty:'250',price:'30',qty:'2'},
    {product_name:'toordal',product_qty:'1kg',price:'120',qty:'5'},
    {product_name:'india gate basmati rice india gate basmati rice india gate basmati rice ',product_qty:'5kg',price:'550',qty:'1'},
    {product_name:'maggi',product_qty:'250g',price:'85',qty:'10'},
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
