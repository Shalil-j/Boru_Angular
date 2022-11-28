import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  store_list=[
    {shop_status:'close',shop_img:'https://en-media.thebetterindia.com/uploads/2021/02/Vaibhav-1.jpg?compress=true&quality=80&w=376&dpr=2.6',shop_name:'Shubham Grocery shop',shop_add:'navi mumbai(east)',shop_type:'grocery store'},
    {shop_status:'open',shop_img:'https://c8.alamy.com/comp/2ECAY16/rack-with-belgian-and-international-newspapers-outside-newsagents-shop-in-brussels-belgium-2ECAY16.jpg',shop_name:'Daily news',shop_add:'andheri(west)',shop_type:'newspaper'},
    {shop_status:'open',shop_img:'https://bkpk.me/wp-content/uploads/2013/02/IMG_2870.jpg',shop_name:'mother dairy',shop_add:'sion(east)',shop_type:'dairy shop'},
    {shop_status:'open',shop_img:'https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2019-08/reliance.jpg',shop_name:'reliance fresh',shop_add:'matunga(west)',shop_type:'Grocery store'},
    {shop_status:'close',shop_img:'https://m.licious.in/image/rebranding/jpg/user-login-new.jpg',shop_name:'Luicious',shop_add:'online',shop_type:'meat'},
    {shop_status:'open',shop_img:'https://www.bisleri.com/images/our-brands-bisleri-bottle-new.png',shop_name:'Bislery',shop_add:'andheri cave road',shop_type:'water'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
