import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-header-carousel',
  templateUrl: './home-header-carousel.component.html',
  styleUrls: ['./home-header-carousel.component.css']
})
export class HomeHeaderCarouselComponent implements OnInit {

  banner=[
    {url : 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'},
    {url : 'https://pnptc-media.s3.amazonaws.com/images/header_photo.2e16d0ba.fill-1200x800.jpg'},
    {url : 'https://www.reviewsxp.com/blog/wp-content/uploads/2018/03/pexels-photo-811108.jpeg'},
  ]


  constructor() { }

  header: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false,
  }


  ngOnInit(): void {
  }

}
