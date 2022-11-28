import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  //   $(".menu-item-list").on('click', 'a',()=> {
  //     // event.preventDefault();
  //     $(".menu-item-list a.active").removeClass("active");
  //     $(this).addClass("active");
  // });
  }

}
