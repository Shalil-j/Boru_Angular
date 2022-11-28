import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    if ($(window).width() < 500) {
      $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
      if ($('.smart-scroll').length > 0) {
          var last_scroll_top = 0;
          $(window).on('scroll',()=>{
             let scroll_top = $(this).scrollTop();
              if(scroll_top < last_scroll_top) {
                  $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
              }
              else {
                  $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
              }
              last_scroll_top = scroll_top;
          });
      }
   }

  }

}
