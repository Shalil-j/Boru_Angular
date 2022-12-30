import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomepageService } from '../service/homepage/homepage.service';
// import {AgmMap, MapsAPILoader  } from '@agm/core';


declare var $:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  geoLocationLat:any; addressLatLong:any; geoLocationLong:any;
  changeAddressTrigger:number = 0;bannerDetailData:any;

  constructor( private router: Router, private route: ActivatedRoute, private homepageService: HomepageService) {
    this.getCoords().then((coords:any)=>{
      localStorage.setItem("latitude", "19.1396734")
      localStorage.setItem("longitude", "72.9254585")
      this.getAddressFromLatLong(coords.latitude, coords.longitude)
    })
   }

  ngOnInit(): void {

  }

  getCoords() {
    return new Promise((resolve, reject) =>
      navigator.permissions ?
        // Permission API is implemented
        navigator.permissions.query({
          name: 'geolocation'
        }).then(permission =>{
          // is geolocation granted?
            if(permission.state === "granted"){
              navigator.geolocation.getCurrentPosition((pos:any) => {
                resolve(pos.coords)
              })
            }else{
              //Location Permission
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position)=>{
                  const longitude = position.coords.longitude;
                  const latitude = position.coords.latitude;
                  this.getCoords().then((coords:any)=>{
                    // console.log(coords.latitude)
                  })
                });
            } else {
              console.log("No support for geolocation")
            }
            }
          }
        ) :
      // Permission API was not implemented
      reject(new Error("Permission API is not supported"))
    )
  }

  getAddressFromLatLong(latitude:any, longitude:any){
    this.homepageService.getAddressFromLatLong(latitude, longitude).subscribe((res:any)=>{
      if(res.status=="OK"){
        this.addressLatLong = res.results[0].formatted_address
        localStorage.setItem("geoAddressLocation", res.results[0].address_components[3].long_name)
        localStorage.setItem("geoAddress", this.addressLatLong)
        this.changeAddressTrigger = this.changeAddressTrigger + 1;
      }
    });
    // this.bannerDetail("19.1396734", "72.9254585")
  }

  bannerDetail(lat:any, long:any){
    var data = {
      "latitude":lat,
      "longitude":long
    }
    this.homepageService.bannerDetail(data).subscribe((res:any)=>{
      if(res.status=="ture"){
        this.bannerDetailData = res.data
      }else{

      }
    });
  }

}
