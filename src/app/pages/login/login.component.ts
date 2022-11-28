import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).on('load', () => {

      window.setTimeout(function(){
            $('.pre-loader').fadeOut('slow', function(){
              $('.pre-loader').addClass('d-none');
              $('.steps').removeClass('d-none');
            });
                  }, 2000);
  });

  $(document).ready(function () {

    // form toggle

    $('#show-personal-info').click(function () {
      $('#mobile-login').addClass('d-none');
      $('#Personal-info').removeClass('d-none');
    });
    $('#show-mobile-login').click(function () {
      $('#mobile-login').removeClass('d-none');
      $('#Personal-info').addClass('d-none');
    });
    // otp visibility toggle
    $('#show-otp').click(function () {
      $('#otp').attr('type', 'text')
      $('#hide-otp').removeClass('d-none')
      $('#show-otp').addClass('d-none')
    });
    $('#hide-otp').click(function () {
      $('#otp').attr('type', 'password')
      $('#hide-otp').addClass('d-none')
      $('#show-otp').removeClass('d-none')
    });
    // steps
    $('#next-step-2').click(()=>{
      $('#step-2').removeClass('d-none');
      $('#step-1').addClass('d-none');
    });
    $('#next-step-3').click(()=>{
      $('#step-3').removeClass('d-none');
      $('#step-2').addClass('d-none');
    });
    $('#get-started').click(()=>{
      $('#login-form').removeClass('d-none');
      $('#step-3').addClass('d-none');
    });
  });


  }
  // pre-loader


}
