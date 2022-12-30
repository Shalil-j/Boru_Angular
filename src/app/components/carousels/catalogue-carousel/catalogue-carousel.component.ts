import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from 'src/app/pages/service/homepage/homepage.service';

@Component({
  selector: 'app-catalogue-carousel',
  templateUrl: './catalogue-carousel.component.html',
  styleUrls: ['./catalogue-carousel.component.css']
})


export class CatalogueCarouselComponent implements OnInit {

  bannerDetailData:any;
  longitude:any; latitude:any;

  constructor(private homepageService: HomepageService) {
    this.latitude = localStorage.getItem("latitude")
    this.longitude = localStorage.getItem("longitude")

  }


  ngOnInit(): void {
    this.SubscriberShop()
  }

  SubscriberShop(){
    var data = {
      "user_id":1,
    }
    this.homepageService.getSubscribeShop(data).subscribe((res:any)=>{
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

}
