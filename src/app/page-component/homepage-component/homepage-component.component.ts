import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-component.component.html',
  styleUrls: ['./homepage-component.component.css']
})
export class HomepageComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
