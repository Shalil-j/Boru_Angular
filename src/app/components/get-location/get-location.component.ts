import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})
export class GetLocationComponent implements OnInit {

displaymsg:boolean = false;
msg="";


getLocation(): void{
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.callApi(longitude, latitude);
      });
  } else {
     console.log("No support for geolocation")
  }
}

callApi(Longitude: number, Latitude: number){
  const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
  console.log(url)
}




  constructor() { }

  ngOnInit(): void {

  }
}
