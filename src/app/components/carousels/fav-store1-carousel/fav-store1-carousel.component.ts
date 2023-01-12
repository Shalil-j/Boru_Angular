import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from 'src/app/pages/service/homepage/homepage.service';


@Component({
  selector: 'app-fav-store1-carousel',
  templateUrl: './fav-store1-carousel.component.html',
  styleUrls: ['./fav-store1-carousel.component.css']
})
export class FavStore1CarouselComponent implements OnInit {

  bannerDetailData:any;
  longitude:any; latitude:any;

  constructor(private homepageService: HomepageService) {
    this.latitude = localStorage.getItem("latitude")
    this.longitude = localStorage.getItem("longitude")
  }


  ngOnInit(): void {
    this.favShop()
  }

  favShop(){
    var data = {
      "favstatus":1,
      "fk_user_id":1//localStorage.getItem("user_id")
    }
    this.homepageService.getFavShop(data).subscribe((res:any)=>{
      if(res.status=="true"){
        this.bannerDetailData = res.data
      }else{

      }
    });
  }


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
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }



}
