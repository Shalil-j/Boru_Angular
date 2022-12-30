import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomepageService } from 'src/app/pages/service/homepage/homepage.service';


@Component({
  selector: 'app-home-header-carousel',
  templateUrl: './home-header-carousel.component.html',
  styleUrls: ['./home-header-carousel.component.css']
})
export class HomeHeaderCarouselComponent implements OnInit {

  
  bannerDetailData:any;
  longitude:any; latitude:any;
  constructor(private homepageService: HomepageService) {
    this.latitude = localStorage.getItem("latitude")
    this.longitude = localStorage.getItem("longitude")
   }

  header: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false,
  }


  ngOnInit(): void {
    this.bannerDetail()
  }

  bannerDetail(){
    var data = {
      "latitude":this.latitude,
      "longitude":this.longitude
    }
    this.homepageService.bannerDetail(data).subscribe((res:any)=>{
      if(res.status=="true"){
        this.bannerDetailData = res.data
      }else{

      }
    });
  }


}
