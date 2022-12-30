import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { LoginService } from "../service/login/login.service";

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
  error:boolean=false;resMsg:any="";
  otpDiv: boolean = false;

  mobileError: boolean = false;
  otpError: boolean = false;
  profileimgError: boolean = false;
  nameError: boolean = false;
  emailError: boolean = false;
  apiResMobile:any="";apiResOTP:any="";
  profilelogin: boolean = false;
  mobilelogin: boolean = true;
  mobileStep:boolean=true;
  fileInfos: Observable<any> | null = null;
  selectedFiles: FileList | undefined;
  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  defaultImg:any="../../../assets/asserts/icons and vectors/Add image.svg";

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { 
    route.params.subscribe(val => {
      
    })
  }

  ngOnInit(): void {

    $(window).on('load', () => {

      window.setTimeout(function () {
        $('.pre-loader').fadeOut('slow', function () {
          $('.pre-loader').addClass('d-none');
          $('.steps').removeClass('d-none');
        });
      }, 2000);
    });
    if(localStorage.getItem("user_id")){
      if(localStorage.getItem("user_id")!=null || localStorage.getItem("user_id") !=""){
        if(localStorage.getItem("user_name")){
          if(localStorage.getItem("user_name")!=null || localStorage.getItem("user_name") !=""){
              this.router.navigateByUrl("/")
          }else{
            this.profilelogin = true;
            this.mobilelogin = false;
            this.mobileStep = false;
            $('#login-form').removeClass('d-none');
          }
        }else{
          this.profilelogin = true;
            this.mobilelogin = false;
            this.mobileStep = false;
            $('#login-form').removeClass('d-none');
        }
      }else{
        this.mobileStep  = true;
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
    }else{
      this.mobileStep  = true;
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
      var data = {
        "mobile":mobileField
      }
      this.loginService.getSendOTP(data).subscribe((res:any)=>{
        if(res.status=="true"){
          this.apiResMobile = res.mobile;
          this.apiResOTP = res.otp_number;
          $('#getOTPBtn').removeClass("btn-inactive");
          $('#getOTPBtn').addClass("btn-active");
          $('#mobileDiv').removeClass("error");
          this.mobileError = false;
          this.displayMsg = "";
          this.otpDiv = true
          $('#loginBtn').removeClass('d-none');
          $('#getOTPBtn').addClass('d-none');
          $("#mobileField").prop('disabled', true);
        }else{

        }
      });
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
    }  else if (this.apiResOTP!=otpField) {
      $('#loginBtn').removeClass("btn-active");
      $('#loginBtn').addClass("btn-inactive");
      $('#otpDiv').addClass("error");
      this.otpError = true;
      this.displayMsg = "Please enter a valid OTP";
    } else {
      var data = {
        "mobile":this.apiResMobile,
        "otp_number":otpField
      }
      this.loginService.verifyOTP(data).subscribe((res:any)=>{
        if(res.status=="true"){
          $('#loginBtn').addClass("btn-active");
          $('#loginBtn').removeClass("btn-inactive");
          $('#otpDiv').removeClass("error");
          this.otpError = false;
          this.profilelogin = true;
          this.mobilelogin = false;
          for (const item of res.data) {
            localStorage.setItem("user_id", item.user_id)
            localStorage.setItem("user_code", item.user_code)
            localStorage.setItem("mobile", item.mobile)
            if(item.first_name!="" || item.first_name!=null){
              localStorage.setItem("user_name", item.first_name)
              this.router.navigateByUrl("/")
            }
          }
        }else{
          $('#otpDiv').addClass("error");
          this.otpError = true;
          this.displayMsg = "Please enter a valid OTP";
        }
      });
      
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

    
  onFileChange(event: any): void {
      this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
      this.cropImgPreview = e.base64;
  }
  imgLoad() {
      // display cropper tool
  }
  initCropper() {
      // init cropper
  }
  
  imgFailed() {
      // error msg
  }

  cropImage(){
    $('#images_cropper').css('display', "none");
    $('#cropImgBtn').css('display', "none");
  }


  checkProfileimg(e:any){
    if(e.target.value === 0){
      $('#selectimgDiv').addClass('error');
      this.displayMsg='Please select your profile image'
      this.profileimgError = true;
    }else{
      
      $('#images_cropper').css('display', "block");
      $('#cropImgBtn').css('display', "block");
      this.imgChangeEvt = e;
      this.defaultImg = this.cropImgPreview
      this.profileimgError = false;
      $('#selectimgDiv').removeClass('error');

    }
  }

  checkAllValidation(e:any){
    var name = $('#fullname').val();
    var email = $('#email').val();

    if (name == "" || name == undefined || name == null) {
      this.nameMsg = 'Please enter your full name'
      this.nameError = true;
      $('#fullname').addClass('error');
    } else if (name.length <= 2) {
      this.nameMsg = 'Full name should be more than 3 characters'
      this.nameError = true;
      $('#fullname').addClass('error');
    } else if (!this.nameValidation.test(name)) {
      this.nameMsg = 'Please enter your proper full name'
      this.nameError = true;
      $('#fullname').addClass('error');
    } else {
      this.nameError = false
      $('#fullname').removeClass('error');
    }

  }

  uploadProfile(){
    var profileimg=$('#profile-img').val();
    var name = $('#fullname').val();
    var email = $('#email').val();
  
    if (name == "" || name == undefined || name == null) {
      this.nameMsg = 'Please enter your full name'
      this.nameError = true;
      $('#fullname').addClass('error');
    } else if (name.length <= 2) {
      this.nameMsg = 'Full name should be more than 3 characters'
      this.nameError = true;
      $('#fullname').addClass('error');
    } else if (!this.nameValidation.test(name)) {
      this.nameMsg = 'Please enter your proper full name'
      this.nameError = true;
      $('#fullname').addClass('error');
    } else {
      var data = {
        "mobile":localStorage.getItem("mobile"),
        "profile_pic":this.cropImgPreview,
        "full_name":name,
        "email_id":email
      }
      this.loginService.setPersonalDetail(data).subscribe((res:any)=>{
        if(res.status=="true"){
          this.nameError = false
          $('#fullname').removeClass('error');
          for (const item of res.data) {
            localStorage.setItem("user_name", item.first_name)
          }
          this.router.navigateByUrl("/");
        }else{
          this.error=true;
          this.resMsg = res.message;
        }
      });
      
    }
  
  }


}
