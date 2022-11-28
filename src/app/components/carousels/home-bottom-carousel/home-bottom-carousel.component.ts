import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-bottom-carousel',
  templateUrl: './home-bottom-carousel.component.html',
  styleUrls: ['./home-bottom-carousel.component.css']
})
export class HomeBottomCarouselComponent implements OnInit {
  banner=[
    {url : 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {url : 'https://images.unsplash.com/photo-1620189507195-68309c04c4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'},
    {url : 'https://images.unsplash.com/photo-1546662608-aec5228e9a74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
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
