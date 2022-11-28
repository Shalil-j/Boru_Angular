import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-change-number-component',
  templateUrl: './change-number-component.component.html',
  styleUrls: ['./change-number-component.component.css']
})
export class ChangeNumberComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  }

}
