import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-catalogue-carousel',
  templateUrl: './catalogue-carousel.component.html',
  styleUrls: ['./catalogue-carousel.component.css']
})


export class CatalogueCarouselComponent implements OnInit {

  constructor() {

   }
    cataloguelist=[
    {catalogue_name : 'milk',  catalogue_url: '../../../assets/asserts/icons and vectors/Dairy.svg'},
    {catalogue_name : 'meal',  catalogue_url: '../../../assets/asserts/icons and vectors/Grocery .svg'},
    {catalogue_name : 'coconut',  catalogue_url: '../../../assets/asserts/icons and vectors/Coconut.svg'},
    {catalogue_name : 'fruits',  catalogue_url: '../../../assets/asserts/icons and vectors/fruits and vegetables.svg'},
    {catalogue_name : 'water',  catalogue_url: '../../../assets/asserts/icons and vectors/Water.svg'},
    {catalogue_name : 'bakery',  catalogue_url: '../../../assets/asserts/icons and vectors/Bakery.svg'},
    {catalogue_name : 'meat',  catalogue_url: '../../../assets/asserts/icons and vectors/Newspaper.svg'},
    {catalogue_name : 'newspaper',  catalogue_url: '../../../assets/asserts/icons and vectors/egg fish meat.svg'}
  ]


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
			0: {
				items: 4,
			},
      600: {
				items: 6,
			},
      1000:{
          items: 8,
      },

    },
    nav: true
  }



  ngOnInit(): void {
  }

}
