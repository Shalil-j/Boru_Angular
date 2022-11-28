import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-login-carousel',
  templateUrl: './login-carousel.component.html',
  styleUrls: ['./login-carousel.component.css']
})
export class LoginCarouselComponent implements OnInit {

  login_carousel=[
    {img : '../../../assets/asserts/icons and vectors/connect to customer.svg',title : 'Connect to customer fast',content : 'Tell your customer about new products and offers, receive an order andsend an update of delivery in real-time'},
    {img : '../../../assets/asserts/icons and vectors/Digital shop.svg',title : 'Nearby shops are now in your mobile',content : 'Browse from wide range of products and shops near you.'},
    {img : '../../../assets/asserts/icons and vectors/maintain record.svg',title : 'Maintain records',content : 'Now it is easy to keep track of delivery and easy to manage subscriptions at one place.'},
  ]


  constructor() { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
