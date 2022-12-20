import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mobileValidation: any = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;
  otpvalidation: any = /^(0|[1-9][0-9]*)$/;
  nameValidation: any = /^[a-zA-Z ]*$/;
  emailValidation: any = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  profileimgValidation: any = /\.(jpe?g|tiff?|png|webp|bmp)$/i;

  displayMsg: any = "";
  nameMsg: any = "";
  emailMsg: any = "";

  otpDiv: boolean = false;

  mobileError: boolean = false;
  otpError: boolean = false;
  profileimgError: boolean = false;
  nameError: boolean = false;
  emailError: boolean = false;



  profilelogin: boolean = false;
  mobilelogin: boolean = true;


  constructor() { }

  ngOnInit(): void {
    $(window).on('load', () => {

      window.setTimeout(function () {
        $('.pre-loader').fadeOut('slow', function () {
          $('.pre-loader').addClass('d-none');
          $('.steps').removeClass('d-none');
        });
      }, 2000);
    });

    $(document).ready(function () {

      // steps
      $('#next-step-2').click(() => {
        $('#step-2').removeClass('d-none');
        $('#step-1').addClass('d-none');
      });
      $('#next-step-3').click(() => {
        $('#step-3').removeClass('d-none');
        $('#step-2').addClass('d-none');
      });
      $('#get-started').click(() => {
        $('#login-form').removeClass('d-none');
        $('#step-3').addClass('d-none');
      });
    });
  }


  toogleOTP() {
    var button = $('#otp-icon')
    if (button.hasClass('bi-eye-fill')) {
      button.removeClass('bi-eye-fill');
      button.addClass('bi-eye-slash-fill');
    } else if (button.hasClass('bi-eye-slash-fill')) {
      button.addClass('bi-eye-fill');
      button.removeClass('bi-eye-slash-fill');
    }
    var otp = $('#otpField');
    otp.attr('type') === 'password' ? otp.attr('type', 'text') : otp.attr('type', 'password')
  }


  validateMobile(e: any) {
    if (e.target.value == null || e.target.value == "" || e.target.value == undefined) {
      $('#getOTPBtn').addClass("btn-inactive").removeClass("btn-active");
      $('#mobileDiv').addClass("error");
      this.mobileError = true;
      this.displayMsg = "Please enter your mobile number";
    } else if (e.target.value.length < 1) {
      $('#getOTPBtn').addClass("btn-inactive").removeClass("btn-active");
      $('#mobileDiv').addClass("error");
      this.mobileError = true;
      this.displayMsg = "Please enter your 10 digit mobile number";
    } else if (!this.mobileValidation.test(e.target.value)) {
      $('#getOTPBtn').addClass("btn-inactive").removeClass("btn-active");
      $('#mobileDiv').addClass("error");
      this.mobileError = true;
      this.displayMsg = "Please enter your valid mobile number";
    } else {
      $('#getOTPBtn').addClass("btn-active").removeClass("btn-inactive");
      $('#mobileDiv').removeClass("error");
      this.mobileError = false;
      this.displayMsg = "";
    }
  }

  getOTP() {
    var mobileField = $("#mobileField").val();
    if (mobileField == null || mobileField == "" || mobileField == undefined) {
      $('#getOTPBtn').addClass("btn-inactive");
      $('#getOTPBtn').removeClass("btn-active");
      $('#mobileDiv').addClass("error");
      this.mobileError = true;
      this.displayMsg = "Please enter your mobile number";
    } else if (mobileField.length < 1) {
      $('#getOTPBtn').removeClass("btn-active");
      $('#getOTPBtn').addClass("btn-inactive");
      $('#mobileDiv').addClass("error");
      this.mobileError = true;
      this.displayMsg = "Please enter your mobile number";
    } else if (!this.mobileValidation.test(mobileField)) {
      $('#getOTPBtn').removeClass("btn-active");
      $('#getOTPBtn').addClass("btn-inactive");
      $('#mobileDiv').addClass("error");
      this.mobileError = true;
      this.displayMsg = "Please enter your valid mobile number";
    } else {
      $('#getOTPBtn').removeClass("btn-inactive");
      $('#getOTPBtn').addClass("btn-active");
      $('#mobileDiv').removeClass("error");
      this.mobileError = false;
      this.displayMsg = "";
      this.otpDiv = true
      $('#loginBtn').removeClass('d-none');
      $('#getOTPBtn').addClass('d-none');
      $("#mobileField").prop('disabled', true);
    }
  }

  validateOTP(e: any) {

    if (e.target.value.length >= 1) {
      $('.otp-btn').removeClass('d-none');
    }
    else if (e.target.value.length == 0) {
      $('.otp-btn').addClass('d-none');
    }

    if (e.target.value == null || e.target.value == "" || e.target.value == undefined) {
      $('#loginBtn').removeClass("btn-active");
      $('#loginBtn').addClass("btn-inactive");
      $('#otpDiv').addClass("error");
      this.otpError = true;
      this.displayMsg = "Please enter the OTP";
    } else if (e.target.value.length < 6) {
      $('#loginBtn').removeClass("btn-active");
      $('#loginBtn').addClass("btn-inactive");
      $('#otpDiv').addClass("error");

      this.otpError = true;
      this.displayMsg = "OTP should be 6 digit number";
    } else if (!this.otpvalidation.test(e.target.value)) {
      $('#loginBtn').removeClass("btn-active");
      $('#loginBtn').addClass("btn-inactive");
      $('#otpDiv').addClass("error");

      this.otpError = true;
      this.displayMsg = "OTP should be a number of 6 digits";
    } else {
      $('#loginBtn').addClass("btn-active");
      $('#loginBtn').removeClass("btn-inactive");
      $('#otpDiv').removeClass("error");
      this.otpError = false;
    }
  }

  login() {
    var otpField = $("#otpField").val();
    if (otpField == null || otpField == "" || otpField == undefined) {
      $('#loginBtn').removeClass("btn-active");
      $('#loginBtn').addClass("btn-inactive");
      $('#otpDiv').addClass("error");
      this.otpError = true;
      this.displayMsg = "Please enter the OTP";
    } else if (otpField.length < 6) {
      $('#loginBtn').removeClass("btn-active");
      $('#loginBtn').addClass("btn-inactive");
      $('#otpDiv').addClass("error");

      this.otpError = true;
      this.displayMsg = "OTP should be 6 digit number";
    } else if (!this.otpvalidation.test(otpField)) {
      $('#loginBtn').removeClass("btn-active");
      $('#loginBtn').addClass("btn-inactive");
      $('#otpDiv').addClass("error");

      this.otpError = true;
      this.displayMsg = "OTP should be a number of 6 digits";
    } else {
      $('#loginBtn').addClass("btn-active");
      $('#loginBtn').removeClass("btn-inactive");
      $('#otpDiv').removeClass("error");
      this.otpError = false;
      this.profilelogin = true;
      this.mobilelogin = false;
    }
  }
  // *************************

  validateName(e: any) {
    if (e.target.value == "" || e.target.value == undefined || e.target.value == null) {
      this.nameMsg = 'Please enter your full name'
      this.nameError = true;
      $('#fullname').addClass('error');
    }
    else if (e.target.value.length <= 2) {
      this.nameMsg = 'Full name should be more than 3 characters'
      this.nameError = true;
      $('#fullname').addClass('error');
    }
    else if (!this.nameValidation.test(e.target.value)) {
      this.nameMsg = 'Please enter your proper full name'
      this.nameError = true;
      $('#fullname').addClass('error');
    }
    else {
      this.nameError = false
      $('#fullname').removeClass('error');
    }
  }


  validateEmail(e: any) {
    if (e.target.value == "" || e.target.value == undefined || e.target.value == null) {
      this.emailMsg = 'Please enter your email address'
      this.emailError = true;
      $('#email').addClass('error');
    }
    else if (e.target.value.length < 0) {
      this.emailMsg = 'Please 2 enter your email address'
      this.emailError = true;
      $('#email').addClass('error');
    }
    else if (!this.emailValidation.test(e.target.value)) {
      this.emailMsg = 'Please enter your proper email address'
      this.emailError = true;
      $('#email').addClass('error');
    }
    else {
      this.emailError = false;
      $('#email').removeClass('error');
    }
  }

  checkProfileimg(e:any){
    console.log(e)
    if(e.target.value === 0){
      $('#selectimgDiv').addClass('error');
      this.displayMsg='Please select your profile image'
      this.profileimgError = true;
    }else{
      this.profileimgError = false;
      $('#selectimgDiv').removeClass('error');
    }
  }

  checkAllValidation(e:any){
  var profileimg=$('#profile-img').val();
  var name = $('#fullname').val();
  var email = $('#email').val();

// email
    if (email == "" || email == undefined || email == null) {
      this.emailMsg = 'Please enter your email address'
      this.emailError = true;
      $('#email').addClass('error');
    }
    else if (email.length < 0) {
      this.emailMsg = 'Please 2 enter your email address'
      this.emailError = true;
      $('#email').addClass('error');
    }
    else if (!this.emailValidation.test(email)) {
      this.emailMsg = 'Please enter your proper email address'
      this.emailError = true;
      $('#email').addClass('error');
    }
    else {
      this.emailError = false;
      $('#email').removeClass('error');
    }
// name
if (name == "" || name == undefined || name == null) {
  this.nameMsg = 'Please enter your full name'
  this.nameError = true;
  $('#fullname').addClass('error');
}
else if (name.length <= 2) {
  this.nameMsg = 'Full name should be more than 3 characters'
  this.nameError = true;
  $('#fullname').addClass('error');
}
else if (!this.nameValidation.test(name)) {
  this.nameMsg = 'Please enter your proper full name'
  this.nameError = true;
  $('#fullname').addClass('error');
}
else {
  this.nameError = false
  $('#fullname').removeClass('error');
}
// profile img
if(profileimg.value == null) {
  $('#selectimgDiv').addClass('error');
  this.displayMsg='Please select your profile image'
  this.profileimgError = true;
}
else{
  alert('got file')
  this.profileimgError = false;
  $('#selectimgDiv').removeClass('error');
}
}

function() {
  $('#Personal-info > input').keyup(()=>{
    var empty = false;
    $('#Personal-info > input').each(()=>{
      if($(this).val() == ''){
        empty=true;
      }
    });
    if(empty){
      $('#profilelogin').attr('disabled','disabled').addClass('btn-inactive');
    }else{
      $('#profilelogin').removeAttr('disabled','disabled').addClass('btn-active').removeClass('btn-inactive');
    }
  })
}




}
